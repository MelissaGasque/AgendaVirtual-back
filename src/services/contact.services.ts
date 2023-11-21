import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/App.errors";
import { ContactsInterface, ContactsInterface1, CreateContactsInterface } from "../interfaces/Contacts.interface";
import { Client, Contact } from "../entities";
import { readContactSchema } from "../schemas/contacts.schema";
// import { ClientsInterface } from "../interfaces/Clients.interface";


//Criação de Contatos
export const createContactsService = async (payload: CreateContactsInterface): Promise<ContactsInterface> => {
    const contactsRepo: Repository<ContactsInterface> = AppDataSource.getRepository(Contact)
    const contacts = contactsRepo.create(payload)
    await contactsRepo.save(contacts)
    return contacts
}

//Listagem dos contatos
export const readContactsService = async (): Promise<ContactsInterface[]> => {
    const contactsRepo: Repository<ContactsInterface> = AppDataSource.getRepository(Contact)
    return readContactSchema.parse(await contactsRepo.find());  //Vai buscar de acordo com o id
}

// Atualiza contatos -> Apenas adminstradores ou dono da conta
export const updateContactsService = async (payload: DeepPartial<Contact>, contactId: string): Promise<ContactsInterface> => {
    const contactsRepo: Repository<Contact> | null = AppDataSource.getRepository(Contact);
    const contacts: Contact | null = await contactsRepo.findOneBy({ id: contactId });

    const updateClient = await contactsRepo.save({ ...contacts, ...payload });
    return updateClient
};

// Deleta a conta do contatos
export const deleteContacsService = async (contactId: string): Promise<void> => {
    const contactsRepo = AppDataSource.getRepository(Contact)
    const deleteClient = await contactsRepo.findOneBy({ id: contactId })

    if (!deleteClient) {
        throw new AppError("Client not found", 404)
    }

    await contactsRepo.remove(deleteClient)

};
