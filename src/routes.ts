import { UserRouter } from "./modules/user";
import { Router } from "express";

export const routes = Router();

routes.use('/users', UserRouter);
