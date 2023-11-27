import { z } from "zod"


export  const contactSchema = z.object({
    id: z.string().uuid(),
    full_name: z.string().max(40).min(1),
    email: z.string().email().max(256).min(1),
    phone_number: z.string().max(15).min(1),
    other_information: z.string().refine((data) => data?.length <= 600, {
        message: "O limite máximo de caracteres é 600"
    }).optional(),
    created_at: z.string(),
    clientId: z.string()
    //client: clientsSchema
})

export  const contactSchemaNoClient = contactSchema.omit({clientId: true})

export const createContactSchema = contactSchema.omit({
    id: true,
    created_at: true,
    clientId:true
})

export const readContactSchema = contactSchema.array()
export const updateContactschema = createContactSchema.partial()
