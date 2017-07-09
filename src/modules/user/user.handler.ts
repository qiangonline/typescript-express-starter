import { Request, Response } from 'express';

import { getEntityManager, getRepository } from 'typeorm';

import { User } from './user.entity';

export async function getUserList(request: Request, response:Response) {
    const repository = getEntityManager().getRepository(User);
    const userList = await repository.find();
    response.send(userList);

}