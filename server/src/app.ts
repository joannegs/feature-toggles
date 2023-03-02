import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import createConnection from '../src/database/index';
import bodyParser from 'body-parser';
import { router as featuresRouter } from './routes/features.route';
import { router as userRouter } from './routes/users.route';
import { router as likeRouter } from './routes/likes.route';

export const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    exposedHeaders: ['Authorization']
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

createConnection();

app.use(featuresRouter);
app.use(userRouter);
app.use(likeRouter);