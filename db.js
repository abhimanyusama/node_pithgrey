import pg from 'pg';
const {Client } = pg;
import dotenv from 'dotenv';
dotenv.config();
const user = process.env.MYUSERNAME;
console.log(user);




const client = new Client({
    host:'localhost', 
    port: 5432,
    user: 'postgres',
    password: process.env.PASSWORD, 
    database: 'home',
});

client.connect()
.then(()=>{
    console.log("connected to the Postgres");
})
.catch(err=>{
    console.log("error connecting", err.stack);
});

export default client;