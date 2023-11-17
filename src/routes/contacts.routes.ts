import { Router } from "express"
import { createContactsController, deleteContactsController, readAllContactsController, updateContactsController } from "../controllers/contact.controllers"

export const contactsRouter = Router()

contactsRouter.post("", createContactsController)
contactsRouter.get("", readAllContactsController)
contactsRouter.patch("/:id", updateContactsController)
contactsRouter.delete("/:id", deleteContactsController)
 