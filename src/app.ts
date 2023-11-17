import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { clientsRouter } from "./routes/clients.routes";
import { handleErrors } from "./errors/handleErrors";
import { contactsRouter } from "./routes/contacts.routes";


const app: Application = express();
app.use(express.json());

app.use("/clients", clientsRouter)
// app.use("/login", loginRouter)
app.use("/contacts", contactsRouter)


app.use(handleErrors)

export default app;