// import {
//     getAllDatabases,
//     createDatabase,
// } from "@/services/database.service";

// export async function GET() {
//     const databases = await getAllDatabases();
//     return Response.json(databases);
// }

// export async function POST (request: Request) {
//     try {
//         const data = await request.json();
//         const newDatabase = await createDatabase(data);
//         return Response.json(newDatabase, { status: 201 });
//     } catch (error) {
//         return Response.json(
//             { error: "Failed to create database" }, { status: 400 });
//     }
// }

import {
    getAllDatabases,
    createDatabase,
} from "@/services/database.service";

export async function GET() {
    const databases = await getAllDatabases();
    return Response.json(databases);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const database = await createDatabase(body);

        return Response.json(database, {
            status: 201,
        });

    } catch (error) {

        return Response.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Unknown error",
            },
            {
                status: 400,
            }
        );
    }
}