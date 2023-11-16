import { Router } from "express"
import { createClientController, deleteClientController, readAllClientsController, updateClientsController} from "../controllers/client.controller" // , deleteClientController, readAllClientsController, updateClientsController

export const clientsRouter = Router()

clientsRouter.post("", createClientController)
clientsRouter.get("", readAllClientsController)
clientsRouter.patch("/:id", updateClientsController)
clientsRouter.delete("/:id", deleteClientController)
 