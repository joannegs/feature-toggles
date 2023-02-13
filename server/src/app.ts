import express from 'express';
import cors from 'cors';
import { router as featuresRouter } from './routes/features.route';

export const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    exposedHeaders: ['Authorization']
}));

app.use(featuresRouter);