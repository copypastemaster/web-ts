import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import getTodosFromDb from '../models/getTodosModel'
import getDeletedTodos from '../models/getDEletedTodosModel';
import getFinishedTodos from '../models/getFinishedTodosModel';
import Todos from '../types/todoSchema';


const getTodos = asyncHandler( 
  async (req: Request, res: Response, next: NextFunction): Promise<void>=> {
  const result: Todos[] | null = await getTodosFromDb();

  if (result?.length === 0) {
    res.status(404).send('No todos found.')
  } else {
    res.json(result)
  }
})

const getDeletedTodo = asyncHandler( 
  async (req: Request, res: Response, next: NextFunction): Promise<void>  => {
  const result: Todos[] | null = await getDeletedTodos();
  
  if (result?.length === 0) {
    res.status(404).send('No deleted todo.');
  } else {
    res.json(result);
  }
})

const getFinishedTodo = asyncHandler( 
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const result: Todos[] | null = await getFinishedTodos();

  if (result?.length === 0) {
    res.status(404).send('No finished todo');
  } else {
    res.json(result)
  }
})

export {
  getTodos,
  getDeletedTodo,
  getFinishedTodo
}
