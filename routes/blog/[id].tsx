import { PageProps } from "$fresh/server.ts";
import db from "../../util/db.ts";
import { Handlers } from "$fresh/server.ts";
import { render } from "https://deno.land/x/gfm/mod.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const post = await db.select(ctx.params.id);
    if (!post) {
      return new Response("Posts not found", { status: 404 });
    }
    return ctx.render(post[0]);
  },
};

export default function Greet(props: PageProps) {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: render(props.data.body) }}/>
    </div>
  );
}
