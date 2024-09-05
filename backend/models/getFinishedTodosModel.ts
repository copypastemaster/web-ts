import { ConnectionPool } from "mssql";
import getConnection from "../database/db";
import Todos from "../types/todoSchema";

const getFinishedTodos = async (): Promise<Todos[] | null> => {
  const pool: ConnectionPool = await getConnection();
  const query = `
    SELECT id, todos, [date], isCompleted, isDeleted
    FROM tblTodos
    WHERE IsCompleted = 1
      AND IsDeleted = 0
  `

  try {
    const result = await pool.request().query(query);
    return result.recordset
  }
  catch (err) {
    throw err;
  }
}

export default getFinishedTodos