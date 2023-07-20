import { Request, Response } from "express";
import { AppDataSource } from "../database/app-data-source";
import { Local } from "../entity/Local";

export async function store(req: Request, res: Response) {
  const storeRepository = AppDataSource.getRepository(Local);

  const savedLocal= await storeRepository.save(req.body);

  return res.status(200).json(savedLocal);
}
  
export async function findAll(req: Request, res: Response) {
  const storeRepository = AppDataSource.getRepository(Local);

  const allLocals = await storeRepository.find();

  return res.json(allLocals);
}