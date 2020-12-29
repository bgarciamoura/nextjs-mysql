import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
    },
});

interface ExecuteProps {
    query: string;
    values: [];
}

export default async function executeQuery({ query, values }: ExecuteProps) {
    try {
        const results = await db.query(query, values);

        await db.end();

        return results;
    } catch (error) {
        throw new Error(`Erro ao executar a query: ${error.message}`);
    }
}
