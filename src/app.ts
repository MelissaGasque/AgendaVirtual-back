import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import { clientsRouter, contactsRouter, loginRouter } from "./routes/index"
import { handleErrors } from "./errors/handleErrors"
import cors from "cors"


const app: Application = express()

app.use(cors())

app.use(express.json())

app.use("/clients", clientsRouter)
app.use("/login", loginRouter)
app.use("/contacts", contactsRouter)

app.use(handleErrors)

export default app;