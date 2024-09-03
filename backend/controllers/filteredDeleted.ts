import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import getConnection from '../database/db'
import { ConnectionPool } from 'mssql'

const filteredDeleted = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const pool: ConnectionPool = await getConnection()
  const request = await pool.request()
                            .query(`
                            SELECT * 
                            FROM tblTodos 
                            WHERE IsDeleted = 1`)

  if (request.recordset.length === 0) {
    res.status(404).send('No deleted todo.')
  } else {
    res.send(request.recordset)
  }
})

export default filteredDeleted