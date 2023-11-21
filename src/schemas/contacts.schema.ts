import { z } from "zod";
import { clientsSchema, idClientSchema, returnClientSchema } from "./clients.schema";


export  const contactSchema = z.object({
    id: z.string().uuid(),
    full_name: z.string().max(40).min(1),
    email: z.string().email().max(256).min(1),
    phone_number: z.string().max(15).min(1),
    other_information: z.string().refine((data) => data?.length <= 600, {
        message: "O limite máximo de caracteres é 600"
    }).optional(),
    created_at: z.string(),
})

export  const contactSchema1 = z.object({
    id: z.string().uuid(),
    full_name: z.string().max(40).min(1),
    email: z.string().email().max(256).min(1),
    phone_number: z.string().max(15).min(1),
    other_information: z.string().refine((data) => data?.length <= 600, {
        message: "O limite máximo de caracteres é 600"
    }).optional(),
    created_at: z.string(),
    // clientId: z.string()
})

export const createContactSchema = contactSchema.omit({
    id: true,
    created_at: true,
})

export const readContactSchema = contactSchema.array()
export const updateContactschema = createContactSchema.partial()
