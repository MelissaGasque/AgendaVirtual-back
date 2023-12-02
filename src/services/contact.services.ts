import { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { AppError } from "../errors/App.errors"
import { ContactsInterfaceNoClient, CreateContactsInterface } from "../interfaces/Contacts.interface"
import { Client, Contact } from "../entities"
import { ClientsInterface } from "../interfaces/Clients.interface"
import { contactSchemaNoClient } from "../schemas/contacts.schema"



//Criação de Contatos
export const createContactsService = async (payload: CreateContactsInterface, clientId:string): Promise<ContactsInterfaceNoClient> => {
    const contactsRepo: Repository<ContactsInterfaceNoClient> = AppDataSource.getRepository(Contact)
    const clientRepo: Repository<ClientsInterface> = AppDataSource.getRepository(Client)
    const client = await clientRepo.findOneBy({id: clientId})
    const contactBody = contactsRepo.create(payload)
    const contactConected = await contactsRepo.save(
        {...contactBody, client: client}
    )
    const contact = contactSchemaNoClient.parse(contactConected)
    return contact
}

//Listagem dos contatos -> Tem acesso apenas dono da conta
export const readContactsService = async (idToken: string): Promise<ContactsInterfaceNoClient[]> => {
    const contactsRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contacts =await contactsRepo.find({
        where: {
            client: { id: idToken },
        },
    })

    if (!contacts) {
        throw new AppError(`Nenhum contato encontrado para o usuario ${idToken}`)
    }

    return contacts
}


// Atualiza contatos 
export const updateContactsService = async (payload: DeepPartial<Contact>, contactId: string): Promise<ContactsInterfaceNoClient> => {
    const contactsRepo: Repository<Contact> | null = AppDataSource.getRepository(Contact)
    const contacts: Contact | null = await contactsRepo.findOneBy({ id: contactId })
    const updateClient = await contactsRepo.save({ ...contacts, ...payload })
    return updateClient
   
}

// Deleta contatos -> Apenas dono da conta
export const deleteContacsService = async (contactId: string): Promise<void> => {
    const contactsRepo = AppDataSource.getRepository(Contact)
    const deleteContact = await contactsRepo.findOneBy({ id: contactId })

    if (!deleteContact) {
        throw new AppError("Contact not found", 404)
    }
    await contactsRepo.remove(deleteContact)
}
