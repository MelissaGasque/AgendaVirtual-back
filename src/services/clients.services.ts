import { DeepPartial, Repository } from "typeorm";
import { ClientsInterface, CreateClientInterface, ReturnClientInterface } from "../interfaces/Clients.interface";
import { AppDataSource } from "../data_source";
import { Client } from "../entities/index";
import { readClientAdmSchema, returnClientSchema } from "../schemas/clients.schema";
import { AppError } from "../errors/App.errors";

//Criação de Clientes
export const createClientsService = async(payload: CreateClientInterface): Promise<ReturnClientInterface> => {
    const clientRepo: Repository<ClientsInterface> = AppDataSource.getRepository(Client)
    const client: ReturnClientInterface = clientRepo.create(payload);
    await clientRepo.save(client)
    return client
}

//Listagem dos clientes -> Apenas administradores
export const readClientsService = async(): Promise<ReturnClientInterface[]> => {
    const clientRepo: Repository<ClientsInterface> = AppDataSource.getRepository(Client)
    return readClientAdmSchema.parse(await clientRepo.find());
}

// Atualiza clientes  -> Apenas adminstradores ou dono da conta
export const updateClientService = async(payload: DeepPartial<Client>, clientId: number ): Promise<ReturnClientInterface> => {
    const clientRepo: Repository<Client> | null = AppDataSource.getRepository(Client);
    const client: Client | null = await clientRepo.findOneBy({ id: Number(clientId) });

    const updateClient = await clientRepo.save({...client, ...payload});
    return updateClient
};

// Deleta a conta do clientes
export const deleteClientService = async(clientId: number): Promise<void> => {
    const clientRepo = AppDataSource.getRepository(Client)
    const deleteClient = await clientRepo.findOneBy({id: clientId})

    if(!deleteClient){
        throw new AppError("Client not found", 404)
      }
      
      await clientRepo.remove(deleteClient)
    
}