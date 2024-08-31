import sql from 'mssql'
require('dotenv').config()

const defaultDBConfig = {
  driver: 'mssql',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: 2019,
  database: process.env.DB_DBNAME,
  requestTimeout: 3600000, // 1hour
  pool: {
    max: 1,
    min: 1,
    idleTimeoutMillis: 30000,
  },
  options: {
    "appName": "simple web app",
    encrypt: false, // for azure
    //trustedConnection: true, // uncomment this if you will use Windows NT authentication
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

let conn = null

const connect = async (newConfig: string) => {
  try {
    conn = await new sql.ConnectionPool(newConfig || defaultDBConfig).connect()
  }
  catch (err) {
    throw new Error(err.message)
  }
}

const getConnection = async () => {
  try {
    if (!conn) {
      await connect('') 
    }
  
    return conn
  }
  catch (err) {
    throw new Error(err.message)
  }
}

export default getConnection


