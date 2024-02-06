import { Client } from "pg";
// tQUH1BqDsPylsT9Q
const client = new Client({
  connectionString:
    "postgres://postgres.hneimzlmqxbdwzxghcwg:tQUH1BqDsPylsT9Q@aws-0-ap-south-1.pooler.supabase.com:5432/postgres",
});

/* const createUsersTable = async () => {
  await client.connect();

  const result = await client.query(`
  
  CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR (50) NOT NULL UNIQUE ,
    password VARCHAR (128) NOT NULL,
    email VARCHAR (355) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
  console.log(result);
};
createUsersTable();

 */

const insertData = async (
  userName: string,
  email: string,
  password: string
) => {
  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users(userName,email,password) VALUES ($1, $2, $3)";
    const res = await client.query(insertQuery, [userName, email, password]);
    console.log("Insertion Done", res);
  } catch (err) {
    console.error(err);
  }
};

// insertData("pranit", "pranit@example.com", "Test123*").catch(
//   console.error
// );

async function getUser(email: string) {
  try {
    await client.connect(); 
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); 
      return result.rows[0];
    } else {
      console.log('No user found with the given email.');
      return null; 
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; 
  } finally {
    await client.end(); 
  }
}

getUser('pranit@example.com').catch(console.error);

