import { z } from "zod";
import { contactSchema, contactSchemaNoClient, createContactSchema, updateContactschema } from "../schemas/contacts.schema";

type ContactsInterface = z.infer<typeof contactSchema>
type ContactsInterfaceNoClient = z.infer<typeof contactSchemaNoClient>
type CreateContactsInterface = z.infer<typeof createContactSchema>
type UpdateContactsInterface = z.infer<typeof updateContactschema>

export { ContactsInterface, CreateContactsInterface, UpdateContactsInterface, ContactsInterfaceNoClient }