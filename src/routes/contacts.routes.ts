import { Router } from "express"
import { createContactsController, deleteContactsController, readAllContactsController, updateContactsController } from "../controllers/contact.controllers"
import { createContactSchema } from "../schemas/contacts.schema"
import { bodyValidated, checkContactsID, isAdmTrue, verifyToken } from "../middlewares"


export const contactsRouter = Router()

contactsRouter.post("", bodyValidated(createContactSchema), verifyToken, createContactsController)
contactsRouter.get("",  verifyToken, isAdmTrue, readAllContactsController)
contactsRouter.use("/:id", checkContactsID, verifyToken)
contactsRouter.patch("/:id", updateContactsController)
contactsRouter.delete("/:id", deleteContactsController)
 