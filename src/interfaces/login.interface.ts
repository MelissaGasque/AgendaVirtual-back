import { z } from "zod";
import { loginRequest } from "../schemas/login.schema";

export type LoginRequest = z.infer<typeof loginRequest>;