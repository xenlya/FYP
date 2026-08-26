// import {prisma} from "@/lib/prisma";

// export async function getAllDatabases() {
//     return prisma.databaseInstance.findMany();
// }

// export async function createDatabase(data: any) {
//     return prisma.databaseInstance.create({
//         data: {
//             name: data.name,
//             host: data.host,
//             port: data.port,
//             databaseName: data.databaseName,
//             username: data.username,
//             password: data.password,
//             environment: data.environment
//         }
//     });
// }

import { prisma } from "@/lib/prisma";

export async function getAllDatabases() {
    return prisma.databaseInstance.findMany();
}

export async function createDatabase(data: {
    name: string;
    host: string;
    port: number;
    databaseName: string;
    username: string;
    password: string;
    environment: "DEVELOPMENT" | "TESTING" | "STAGING" | "PRODUCTION";
}) {
    const existing = await prisma.databaseInstance.findFirst({
        where: {
            name: data.name,
        },
    });

    if (existing) {
        throw new Error("Database name already exists.");
    }

    return prisma.databaseInstance.create({
        data,
    });
}

export async function createSnapshot(
    databaseInstanceId: number,
    message?: string,
    createdBy?: string
){
    const database
}