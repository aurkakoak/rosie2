import db from "./db.ts";
await db.delete("post");
await db.create("post", {
  title: "test post 1",
  category: "test",
  publishedAt: new Date(),
  body: `## Can you believe that markdown is supported
    - in 
    - 2023 
    - in deno`,
});

const posts = await db.select("post");

console.log(posts);
