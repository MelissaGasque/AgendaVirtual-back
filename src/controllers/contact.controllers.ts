import { Request, Response } from "express"
import { createContactsService, deleteContacsService, readContactsService, updateContactsService } from "../services/contact.services"


//Criação de Contacts
export const createContactsController = async (req: Request, res: Response): Promise<Response> => {
  const clientId: string = res.locals.decoded.sub
  const contact = await createContactsService(req.body, clientId)
    return res.status(201).json(contact)
  }

//Listagem dos Contacts
export const readAllContactsController = async (req: Request, res: Response): Promise<Response> => {
    const contact = await readContactsService() 
    return res.status(200).json(contact)
  }

// // Atualiza Contacts
export const updateContactsController  = async (req: Request, res: Response): Promise<Response> => {
    const contactId: string = req.params.id
    const updateContact = req.body
    const contact = await updateContactsService(updateContact, contactId)
    return res.status(200).json(contact)
}

// Deleta a conta do contact
export const deleteContactsController = async (req: Request, res: Response): Promise<Response> => {
    const contactId = req.params.id
    await deleteContacsService(contactId)
    return res.status(204).json()
}