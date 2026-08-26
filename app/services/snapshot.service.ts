import {Client} from "pg";

type Column ={
    name : string;
    type : string;
};

type Table = {
    name : string;
    columns : Column[];
}

export async function captureSchema(config: {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
}) {
    const client = new Client({
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password
    });

    try {
        await client.connect();
        // Perform snapshot creation logic here
        const result = await client.query(`
            SELECT table_name, column_name, data_type
            FROM information_schema.columns
            WHERE table_schema = 'public'
            Order by table_name, ordinal_position;
        `);
        // await client.end();
        const tableMap = new Map<string, Table>();
        for (const row of result.rows) {
            if (!tableMap.has(row.table_name)) {
                tableMap.set(row.table_name, {
                    name: row.table_name,
                    columns: []
                });
            }
            const table = tableMap.get(row.table_name);
            if (!table){
                continue;
            }
            table.columns.push({
                name: row.column_name,
                type: row.data_type
            });
        }
        const snapshot = { tables: Array.from(tableMap.values()) };
        // return Array.from(tableMap.values());
        return snapshot;
    } finally {
        await client.end();
    }
}