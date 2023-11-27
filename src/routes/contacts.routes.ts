import { Router } from "express"
import { createContactsController, deleteContactsController, readAllContactsController, updateContactsController } from "../controllers/contact.controllers"
import { createContactSchema } from "../schemas/contacts.schema"
import { bodyValidated, checkContactsID, isAdmTrue, verifyToken, emailContacts } from "../middlewares"



export const contactsRouter = Router()

contactsRouter.use("/", verifyToken)
contactsRouter.post("", bodyValidated(createContactSchema), emailContacts, createContactsController)
contactsRouter.get("",  isAdmTrue, readAllContactsController)

contactsRouter.use("/:id", checkContactsID, verifyToken, isAdmTrue)
contactsRouter.patch("/:id", updateContactsController)
contactsRouter.delete("/:id", deleteContactsController)
 