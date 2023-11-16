import { clientsSchema } from "./Clients.schema";


export const loginRequest = clientsSchema.pick({
   username: true,
   password: true
});