import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import getConnection from '../database/db'
import { ConnectionPool } from 'mssql'
import sql from 'mssql'
import Todos from '../types/todoSchema'


const deleteTodo = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params; 

  const todoId = parseInt(id, 10);

  if (isNaN(todoId)) {
    res.status(400).send('Invalid ID');
    return;
  }

  const pool = await getConnection();
  const request = pool.request().input('id', sql.Int, id)

  const result = await request.query(`
    DELETE FROM tblTodos
    WHERE id = @id
    `)

  if (result.recordset[0] === 0) {
    res.status(404).send('No todo found')
  } else {
    res.status(204).send('Todo deleted')
  }
})

export default deleteTodo