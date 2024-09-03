import { Request, Response, NextFunction, Router} from 'express';
import getTodos from '../controllers/getTodos';
import postTodo from '../controllers/postTodo';
import updateTodo from '../controllers/updateTodo';
import deleteTodo from '../controllers/deleteTodo';
import filteredCompleted from '../controllers/filteredCompleted';
import filteredDeleted from '../controllers/filteredDeleted';

const todoRoutes: Router = Router();

todoRoutes.get('/deleted', filteredDeleted)
todoRoutes.get('/completed', filteredCompleted)
todoRoutes.get('/', getTodos)
todoRoutes.patch('/:id', updateTodo)
todoRoutes.post('/', postTodo)
todoRoutes.delete('/:id', deleteTodo)

export default todoRoutes
