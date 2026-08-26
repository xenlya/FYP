import {Client} from "pg";

export async function testConnection(config: {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
}) {
    const client = new Client(config);

    try {
        await client.connect();
        await client.end();
        return{
            success: true,
            message: "Connection successful"
        };
    } catch (error) {
        return{
            success: false,
            message: "Connection failed"
        }
    }
}