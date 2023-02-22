import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import createConnection from '../src/database/index';
import { router as featuresRouter } from './routes/features.route';
import { router as userRouter } from './routes/users.route';

export const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    exposedHeaders: ['Authorization']
}));

createConnection();

app.use(featuresRouter);
app.use(userRouter);