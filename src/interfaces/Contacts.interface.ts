import { z } from "zod";
import { contactSchema, createContactSchema, updateContactschema } from "../schemas/contacts.schema";

type ContactsInterface = z.infer<typeof contactSchema>
type CreateContactsInterface = z.infer<typeof createContactSchema>
// type ReturnContactsInterface = z.infer<typeof returnClientSchema>
// type ReadContactsInterface = z.infer<typeof readContactSchema>
type UpdateContactsInterface = z.infer<typeof updateContactschema>

export { ContactsInterface, CreateContactsInterface, UpdateContactsInterface }