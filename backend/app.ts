import express, { Application, Request, Response } from 'express'
import booksRouter from './routes/booksRouter'
import authorsRouter from './routes/authorsRouter';
import indexRouter from './routes/indexRouter';

const app: Application = express();

app.use(express.json());

app.use('/books', booksRouter)
app.use('/authors', authorsRouter)
app.use('/', indexRouter)

const PORT: number = 3000;
app.listen(PORT, () => {
  console.log('Server is listening on port', PORT)
})