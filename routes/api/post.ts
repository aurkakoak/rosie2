import { Handlers } from "$fresh/server.ts";
import db from "../../util/db.ts";
import { formDataToObject } from "https://deno.land/x/form_data_to_object/mod.ts";

export const handler: Handlers = {
  async GET() {
    const posts = await db.select("post");
    return Response.json(posts);
  },

  async POST(req) {
    const form = await req.formData();
    const { title, body } = formDataToObject(form);
    db.create("post", {
      title,
      body,
    });
    const headers = new Headers(req.headers);
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
