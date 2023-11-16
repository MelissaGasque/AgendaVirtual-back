import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { clientsRouter } from "./routes/routes";
import { handleErrors } from "./errors/handleErrors";


const app: Application = express();
app.use(express.json());

app.use("/clients", clientsRouter)
// app.use("/login", loginRouter)
// app.use("/clients", contactsRouter)


app.use(handleErrors)

export default app;