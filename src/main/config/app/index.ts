import { cors } from '@main/middlewares/cors';
import express from 'express';
import setupMiddlewares from '../middlewares';

const app = express();
app.use(cors);
setupMiddlewares(app);

export { app };
