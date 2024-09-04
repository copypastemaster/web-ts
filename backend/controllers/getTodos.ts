import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import getConnection from '../database/db'
import { ConnectionPool } from 'mssql'
import Todos from '../types/todoSchema'

const getTodos = asyncHandler( async (req: Request, res: Response, next: NextFunction): Promise<void>=> {
  const pool: ConnectionPool = await getConnection();
  const request = await pool.request().query(`
    SELECT id, todos, [date], IsCompleted, IsDeleted
    FROM tblTodos
    WHERE IsCompleted = 0
      AND IsDeleted = 0  
  `)

  const result: Todos[] | null = request.recordset;
  
  if (result.length === 0) {
    res.status(404).json({ message: 'No todos found' })
  } else {
    res.json(result)
  }
})

export default getTodos
