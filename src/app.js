import express from 'express';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './utils/error.handler.js';

const app = express();

app.use(express.json());

app.use('/', userRoutes);

app.use(errorHandler);

export default app;

