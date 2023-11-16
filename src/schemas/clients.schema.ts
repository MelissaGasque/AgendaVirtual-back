import { z } from "zod";


export  const clientsSchema = z.object({
    id: z.number().positive().int(),
    full_name: z.string().max(40).min(1),
    username: z.string().max(15).min(1),
    email: z.string().max(256).min(1),
    password: z.string().max(10).min(4),
    phone_number:z.string().max(15).min(6),
    admin: z.boolean().default(false),
    created_at: z.string()
});

export const createClientSchema = clientsSchema.omit({
    id: true,
    created_at: true,
})

export const returnClientSchema = clientsSchema.omit({password:true}) 
export const readClientAdmSchema = returnClientSchema.array()         
export const updateClientSchema = createClientSchema.partial()         