import { html } from "https://deno.land/x/html/mod.ts";

export function Nav() {
  return <nav class="bg-gray-800">
      <ul class="flex justify-between items-center px-8 py-4">
        <li><a href="/about" class="text-gray-300 hover:text-white">About</a></li>
        <li><a href="/case-study" class="text-gray-300 hover:text-white">Case Study</a></li>
        <li><a href="/blog" class="text-gray-300 hover:text-white">Blog</a></li>
        <li><a href="/contact" class="text-gray-300 hover:text-white">Contact</a></li>
      </ul>
    </nav>
  ;
}