import { z } from "zod";


export  const contactSchema = z.object({
    id: z.number().positive().int(),
    full_name: z.string().max(40).min(1),
    email: z.string().max(256).min(1),
    phone_number:z.string().max(15).min(6),
    other_information: z.string().refine((data) => data.length <= 600, {
        message: "O limite máximo de caracteres é 600"
    }),
    created_at: z.string(),
    deleted_at: z.string().nullable()
})

export const createContactSchema = contactSchema.omit({
    //Criação dos contatos
    id: true,
    created_at: true,
    deleted_at: true
})

export const readContactSchema = contactSchema.array()
//Mostrar a lista de contatos
export const updateContactschema = createContactSchema.partial()
//Alteração dos contatos