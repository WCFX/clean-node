import { cors, ContentType } from '@main/middlewares';
import express from 'express';
import setupMiddlewares from '../middlewares';

const app = express();
app.use(cors);
app.use(ContentType);
setupMiddlewares(app);

export { app };
