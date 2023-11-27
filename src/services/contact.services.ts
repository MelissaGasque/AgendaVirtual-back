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
    const contactConected = await contactsRepo.save({...contactBody, client: client})
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


// Atualiza contatos -> Apenas dono da conta
export const updateContactsService = async (
    payload: DeepPartial<Contact>,
    contactId: string,
    idToken: string
  ): Promise<ContactsInterfaceNoClient> => {
    const contactsRepo: Repository<Contact> | null = AppDataSource.getRepository(Contact);
  
    const customerContacts =await contactsRepo.find({
        where: {
            client: { id: idToken },
        },
    })

    const contact = customerContacts.find(contact => contact.id === contactId);
    
    if (!contact) {
        throw new AppError('Você não tem permissão para alterar esse contato');
  }

    const updatedContact = await contactsRepo.save({ ...contact, ...payload })

    return updatedContact
   
  }

// Deleta contatos -> Apenas dono da conta
export const deleteContacsService = async (contactId: string, idToken: string): Promise<void> => {
    const contactsRepo = AppDataSource.getRepository(Contact)
    const customerContacts =await contactsRepo.find({
        where: {
            client: { id: idToken },
        },
    })
    const contact = customerContacts.find(contact => contact.id === contactId);
    
    if (!contact) {
        throw new AppError("Client not found", 404)
    }

    await contactsRepo.remove(contact)

}
