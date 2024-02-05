"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// tQUH1BqDsPylsT9Q
const client = new pg_1.Client({
    connectionString: "postgres://postgres.hneimzlmqxbdwzxghcwg:tQUH1BqDsPylsT9Q@aws-0-ap-south-1.pooler.supabase.com:5432/postgres",
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
const insertData = (userName, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const insertQuery = "INSERT INTO users(userName,email,password) VALUES ($1, $2, $3)";
        const res = yield client.query(insertQuery, [userName, email, password]);
        console.log("Insertion Done", res);
    }
    catch (err) {
        console.error(err);
    }
});
// insertData("pranit", "pranit@example.com", "Test123*").catch(
//   console.error
// );
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = 'SELECT * FROM users WHERE email = $1';
            const values = [email];
            const result = yield client.query(query, values);
            if (result.rows.length > 0) {
                console.log('User found:', result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log('No user found with the given email.');
                return null;
            }
        }
        catch (err) {
            console.error('Error during fetching user:', err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
getUser('pranit@example.com').catch(console.error);
