import { Request, Response } from "express"
import { createClientsService, deleteClientService, readClientsService, updateClientService } from "../services/clients.services" // , deleteClientService, readClientsService, updateClientService


//Criação de Clientes
export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const client = await createClientsService(req.body)
    return res.status(201).json(client)
  }
//Listagem dos clientes -> Apenas administradores
export const readAllClientsController = async (req: Request, res: Response): Promise<Response> => {
    const client = await readClientsService() 
    return res.status(200).json(client)
  }

// // Atualiza clientes  -> Apenas adminstradores ou dono da conta
export const updateClientsController  = async (req: Request, res: Response): Promise<Response> => {
    const clientId: string = req.params.id
    const updateClient = req.body
    const client = await updateClientService(updateClient, clientId)
    return res.status(200).json(client)
}

// // Deleta a conta do cliente
export const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: string = req.params.id
    await deleteClientService(clientId)
    return res.status(204).json()
}