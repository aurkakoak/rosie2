import { PageProps } from "$fresh/server.ts";
import db from "../../util/db.ts";
import { Handlers } from "$fresh/server.ts";
import * as datetime from "std/datetime/mod.ts";

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
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
            Our Resources
          </h2>
          <p class="font-light text-gray-500 sm:text-xl">
            these are my resources and posts
          </p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          {props.data.map((post) => (
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="text-sm">
                  {datetime.difference(
                    new Date(post.publishedAt),
                    new Date(),
                    { units: ["days", "months"] },
                  )}
                </span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                <a href={`resources/${post.id}`}>{post.title}</a>
              </h2>
              <p class="mb-5 font-light text-gray-500">
                {post.preview || "Post details here"}
              </p>
              <div class="flex justify-between items-center">
                <a
                  href={`resources/${post.id}`}
                  class="inline-flex items-center font-medium text-primary-600 hover:underline"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
