import { Handlers, PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <form method="post" action="/api/post">
      <input
        required
        type="text"
        name="title"
        placeholder="title"
        className="block px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) "
      />
      <textarea
        required
        name="body"
        placeholder="content"
        className="block p-2.5 w-full text-sm rounded border"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
