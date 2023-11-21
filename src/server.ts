import "dotenv/config";
import { AppDataSource } from "./data-source";
import app from "./app"

AppDataSource.initialize()
    .then((): void => {
        console.log('Database Conected')

        const PORT: number = Number(process.env.PORT) || 3000;
        app.listen(PORT, (): void => console.log(`App running at port ${PORT}`))
    })
    .catch((err: unknown): void => {
        console.error('Error during Data Source initialization', err);
    });

