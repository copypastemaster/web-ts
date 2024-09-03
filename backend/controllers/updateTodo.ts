import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import getConnection from '../database/db'
import { ConnectionPool } from 'mssql'
import sql from 'mssql'
import Todos from '../types/todoSchema'


const updateTodo = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id, todos, date, IsCompleted, IsDeleted }: Todos = req.body

  if (!id) {
    res.status(400).send('ID is required')
    return
  }

  const pool: ConnectionPool = await getConnection();
  const request = pool.request()
                      .input('id', sql.Int, id)

  if (todos !== undefined) request.input('todos', sql.VarChar, todos)
  if (date !== undefined) request.input('date', sql.DateTime, date)
  if (IsCompleted !== undefined) request.input('IsCompleted', sql.Bit, IsCompleted)
  if (IsDeleted !== undefined) request.input('IsDeleted', sql.Bit, IsDeleted)

  let query = 'UPDATE tblTodos SET '

  if (todos !== undefined) query += 'todos = @todos, '
  if (date !== undefined) query += '[date] = @date, '
  if (IsCompleted !== undefined) query += 'IsCompleted = @IsCompleted, '
  if (IsDeleted !== undefined) query += 'IsDeleted = @IsDeleted, '

  query = query.slice(0, -2) + ' WHERE id = @id'

  const result = await request.query(query)

  if (result.rowsAffected[0] === 0) {
    res.status(404).send('Todo not found')
  } else {
    res.status(200).send('Todo updated successfully')
  }
})

export default updateTodo
