import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import getConnection from '../database/db'
import { ConnectionPool } from 'mssql'
import Todos from '../types/todoSchema'
import sql from 'mssql'

const postTodo = asyncHandler(async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { todos, date, IsCompleted, IsDeleted }: Todos = req.body;

  const pool: ConnectionPool = await getConnection();
  const request = await pool.request()
                  .input('todo', sql.VarChar, todos)
                  .input('date', sql.DateTime, date)
                  .input('IsCompleted', sql.Bit, IsCompleted)
                  .input('IsDeleted', sql.Bit, IsDeleted)
                  .query(`
                      INSERT INTO tblTodos ([todos], [date], [IsCompleted], [IsDeleted])
                      VALUES (ISNULL(@todo, ''), @date, @IsCompleted, @IsDeleted)
                    `)

  const createdTodo = request.recordset[0]

  res.status(201).json({
    message: 'Todo created successfully',
    todo: createdTodo
  });
})

export default postTodo