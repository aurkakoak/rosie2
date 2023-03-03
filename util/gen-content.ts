import db from './db.ts'; 

await db.create('post', {
    id: 1, 
    title: "test post 1", 
    tags: ['cars', 'sports'], 
    body: `## Can you believe that markdown
    is supported 
    - in 
    - 2023 
    - in deno`
}); 

const posts = await db.select('post'); 

console.log(posts);