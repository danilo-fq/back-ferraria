import { Request, Response } from 'express';
import userService from '../services/user.service';

const create = async (req: Request, res: Response): Promise<Response> => {
  const token: string = await userService.create(req.body);
  return res.status(201).json({ token });
};

export default {
  create,
};