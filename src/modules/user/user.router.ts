import { Router } from 'express';

import { getUserList } from './user.handler';

let router = Router();

router.get('/user/list', getUserList);

export { router };