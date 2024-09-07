import { ConnectionPool } from "mssql";
import getConnection from "../database/db";
import sql from 'mssql'
import Todos from "../types/todoSchema";

const getTodosFromDb = async (): Promise<Todos[] | null> => {
  const pool: ConnectionPool = await getConnection();
  const query =`
    SELECT id, todos, [date], isCompleted, isDeleted
    FROM tblTodos
    WHERE isCompleted = 0
      AND isDeleted = 0
  `

  try {
    const result = await pool.request().query(query)
    return result.recordset
  }
  catch (err) {
    throw err;
  }
}

export default getTodosFromDb