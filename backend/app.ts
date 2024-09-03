import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import CustomNotFoundError from './errors/customNotFoundError';
import todoRoutes from './routes/todoRoutes';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'))

app.use('/todos', todoRoutes)

app.use((err: CustomNotFoundError, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  res.status(err.statusCode || 500).send(err.message)
})

const PORT: number = 3000;
app.listen(PORT, () => {
  console.log('Server is listening on port', PORT)
})