import { PageProps } from "$fresh/server.ts";
import db from "../../util/db.ts";
import { Handlers } from "$fresh/server.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
import { Head } from "$fresh/runtime.ts";

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
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tailwindcss/typography@0.4.1/dist/typography.css"
        />
      </Head>
      <div className="prose lg:prose-xl">
        <h1>{props.data.title}</h1>
        <article
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: Marked.parse(props.data.body).content,
          }}
        />
      </div>
    </>
  );
}
