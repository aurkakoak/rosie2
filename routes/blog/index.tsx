import { PageProps } from "$fresh/server.ts";
import db from "../../util/db.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const posts = await db.select("post");
    if (!posts) {
      return new Response("Posts not found", { status: 404 });
    }
    return ctx.render(posts);
  },
};

export default function Greet(props: PageProps) {
  return (
    <ul>
      {props.data.map((post) => (
        <li>
          <a href={`blog/${post.id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
}
