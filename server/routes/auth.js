import express from 'express';
const router = express.Router();

import {getContent, getUserContent, createUserContent, deleteUserContent} from '../controllers/auth.js';
router.get('/', getContent);
router.get('/:userid', getUserContent);
router.post('/:userid/create', createUserContent);
router.delete('/:userid/:id', deleteUserContent);
export default router;