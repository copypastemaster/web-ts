import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import getConnection from '../database/db'
import { ConnectionPool } from 'mssql'

const filteredCompleted = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const pool: ConnectionPool = await getConnection()
  const request = await pool.request()
                            .query(`
                            SELECT * 
                            FROM tblTodos 
                            WHERE IsCompleted = 1`)

  if (request.recordset.length === 0) {
    res.status(404).send('No completed todo.')
  } else {
    res.send(request.recordset)
  }
})

export default filteredCompleted