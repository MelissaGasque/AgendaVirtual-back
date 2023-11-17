import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../data_source";
import { AppError } from "../errors/App.errors";
import { ContactsInterface, CreateContactsInterface } from "../interfaces/Contacts.interface";
import { Contact } from "../entities";
import { readContactSchema } from "../schemas/contacts.schema";

//Criação de Contatos
export const createContactsService = async(payload: CreateContactsInterface): Promise<ContactsInterface> => {
    const contactsRepo: Repository<ContactsInterface> = AppDataSource.getRepository(Contact)
    const contacts: ContactsInterface = contactsRepo.create(payload);
    await contactsRepo.save(contacts)
    return contacts
}
//Listagem dos contatos
export const readContactsService = async(): Promise<ContactsInterface[]> => {
    const contactsRepo: Repository<ContactsInterface> = AppDataSource.getRepository(Contact)
    return readContactSchema.parse(await contactsRepo.find());
}

// Atualiza contatos -> Apenas adminstradores ou dono da conta
export const updateContactsService = async(payload: DeepPartial<Contact>, contactId: number ): Promise<ContactsInterface> => {
    const contactsRepo: Repository<Contact> | null = AppDataSource.getRepository(Contact);
    const contacts: Contact| null = await contactsRepo.findOneBy({ id: Number(contactId) });

    const updateClient = await contactsRepo.save({...contacts, ...payload});
    return updateClient
};

// Deleta a conta do contatos
export const deleteContacsService = async(contactId: number): Promise<void> => {
    const contactsRepo = AppDataSource.getRepository(Contact)
    const deleteClient = await contactsRepo.findOneBy({id: contactId})

    if(!deleteClient){
        throw new AppError("Client not found", 404)
      }
      
      await contactsRepo.remove(deleteClient)
    
};
