import { sign } from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { AppError } from "../errors/App.errors";
import { LoginRequest } from "../interfaces/login.interface";
import { compare } from "bcryptjs";

export const loginService = async (payload: LoginRequest): Promise<string> => {
    const loginRepo = AppDataSource.getRepository(Client);
    const client: Client | null = await loginRepo.findOne({ where: { username: payload.username } })
    if (!client) {
        throw new AppError("Erro ao fazer login", 401)
    }
    const matchPassword: boolean = await compare(payload.password.toString(), client.password);

    if (!matchPassword) {
        throw new AppError("Erro ao fazer login", 401);
    }

    const token: string = sign(
        { admin: client.admin, idToken: client.id},
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN!,
            subject: client.id.toString(),
        }
    );

    return token

} 
