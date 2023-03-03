import Surreal from "https://deno.land/x/surrealdb/mod.ts";

const db = new Surreal('http://127.0.0.1:8000/rpc');

await db.signin({
    user: 'root', 
    pass: 'root',
}); 

await db.use( 'dev', 'blog')

export default db; 