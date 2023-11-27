import { Router } from "express"
import { createClientController, deleteClientController, readClientController, readAllClientsController, updateClientsController} from "../controllers/client.controller" 
import { bodyValidated, checkClientID, emailExists, isAdmTrue, usernameExists, verifyToken } from "../middlewares"
import { createClientSchema } from "../schemas/clients.schema"


export const clientsRouter = Router()

clientsRouter.post("", bodyValidated(createClientSchema), usernameExists, emailExists, createClientController)
clientsRouter.get("", verifyToken, isAdmTrue, readAllClientsController)
clientsRouter.get("/:id", checkClientID, verifyToken, isAdmTrue, readClientController)
clientsRouter.patch("/:id", checkClientID, verifyToken, isAdmTrue, updateClientsController)
clientsRouter.delete("/:id", checkClientID, verifyToken, isAdmTrue, deleteClientController)
 