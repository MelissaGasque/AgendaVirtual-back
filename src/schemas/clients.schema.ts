import { z } from "zod"


export  const clientsSchema = z.object({
    id: z.string().uuid(),
    full_name: z.string().max(40).min(1),
    username: z.string().max(15).min(1),
    email: z.string().email().max(256).min(1),
    password: z.string().max(70).min(4),
    phone_number: z.string().max(15).min(1),
    admin: z.boolean().default(false),
    created_at: z.string()
});

export const createClientSchema = clientsSchema.omit({
    id: true,
    created_at: true,
})

export const idClientSchema = z.object({id: z.string().uuid()})
export const returnClientSchema = clientsSchema.omit({ password: true })
export const readClientAdmSchema = returnClientSchema.array()         
export const updateClientSchema = createClientSchema.partial()         