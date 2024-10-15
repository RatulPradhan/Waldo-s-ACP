import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const db = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }).promise();

async function getUsers(){
  const [rows] = await db.query("SELECT * FROM user;")
  return rows
}
const users = await getUsers()
console.log(users)
