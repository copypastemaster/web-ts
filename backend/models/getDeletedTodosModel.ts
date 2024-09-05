import { ConnectionPool } from "mssql";
import getConnection from "../database/db";
import Todos from "../types/todoSchema";

const getDeletedTodos = async ():Promise<Todos[] | null> => {
  const pool: ConnectionPool = await getConnection();
  const query = `
    SELECT id, todos, [date], IsCompleted, IsDeleted
    FROM tblTodos
    WHERE IsDeleted = 1
  `
  
  try {
    const result = await pool.request().query(query);
    return result.recordset;
  } 
  catch (err) {
    throw err;
  }
}

export default getDeletedTodos