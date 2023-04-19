import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import './services/firebase';
import auth from './middlewares/auth';
import { authRoutes, dashboardRoutes, usersRoutes } from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.use(auth);

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/dashboard', dashboardRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server test');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});