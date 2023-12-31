import { z } from "zod"
import { clientsSchema, createClientSchema, returnClientSchema, updateClientSchema } from "../schemas/clients.schema"


type ClientsInterface = z.infer<typeof clientsSchema>
type CreateClientInterface = z.infer<typeof createClientSchema>
type ReturnClientInterface = z.infer<typeof returnClientSchema>
type UpdateClientInterface = z.infer<typeof updateClientSchema>

export { ClientsInterface, CreateClientInterface, ReturnClientInterface, UpdateClientInterface }