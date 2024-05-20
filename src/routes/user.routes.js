import express from 'express';
import { getUsers, getUser, addUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/api/users', getUsers)

router.post('/api/users', addUser);

router.get('/api/users/:id', getUser)

export default router;

