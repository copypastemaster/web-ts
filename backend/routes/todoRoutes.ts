import { Request, Response, NextFunction, Router} from 'express';
import { getDeletedTodo, getFinishedTodo, getTodos } from '../controllers/getTodos';
import postTodo from '../controllers/postTodo';
import updateTodo from '../controllers/updateTodo';
import deleteTodo from '../controllers/deleteTodo';

const todoRoutes: Router = Router();

todoRoutes.get('/deleted', getDeletedTodo)
todoRoutes.get('/completed', getFinishedTodo)
todoRoutes.get('/', getTodos)
todoRoutes.patch('/:id', updateTodo)
todoRoutes.post('/', postTodo)
todoRoutes.delete('/:id', deleteTodo)

export default todoRoutes
