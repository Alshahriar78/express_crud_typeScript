import sql from 'mssql';
import dotenv from "dotenv";

dotenv.config();

export const config: sql.config = {
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    server: process.env.DB_SERVER as string,
    database: process.env.DB_DATABASE as string,
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
    port: 1433
};

export async function getConnection() {
    try {
        const pool = await sql.connect(config);
        console.log("Database Connection Successfully")

        return pool;

    } catch (err) {
        console.error("Database Connection Failed:", err);
    }
}