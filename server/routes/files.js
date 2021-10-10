import express from 'express';
const router = express.Router();

import {getFiles, createFile, deletePost} from '../controllers/files.js';

router.get('/', getFiles);
router.post('/', createFile);
router.delete('/:id', deletePost);
export default router;