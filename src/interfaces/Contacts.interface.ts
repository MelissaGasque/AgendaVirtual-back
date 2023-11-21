import { z } from "zod";
import { contactSchema, contactSchema1, createContactSchema, updateContactschema } from "../schemas/contacts.schema";

type ContactsInterface = z.infer<typeof contactSchema>
type ContactsInterface1 = z.infer<typeof contactSchema1>
type CreateContactsInterface = z.infer<typeof createContactSchema>
type UpdateContactsInterface = z.infer<typeof updateContactschema>

export { ContactsInterface, CreateContactsInterface, UpdateContactsInterface, ContactsInterface1 }