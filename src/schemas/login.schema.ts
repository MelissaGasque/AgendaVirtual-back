import { clientsSchema } from "../schemas/clients.schema"


export const loginRequest = clientsSchema.pick({
   username: true,
   password: true
})