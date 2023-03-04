import navItems from "./menuitems.ts";
import { asset } from "$fresh/runtime.ts";

export default function Footer() {
  const menus = [
    {
      title: "Website",
      children: navItems,
    },
    {
      title: "Community",
      children: [
        { name: "Forum", path: "#" },
        { name: "Discord", path: "#" },
      ],
    },
  ];

  return (
    <div
      class={`mx-auto bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm`}
      style={`background-image: url(${
        asset("squiggle.svg")
      }); background-size: cover;opacity: 0.5;`}
    >
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="font-bold text-2xl">
            Rosie Davies
          </div>
        </div>
        <div class="text-gray-500">
          Child Therapist
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.path}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © Rosie Davies<br />
          All right reserved.
        </div>

        <a
          href="https://github.com/denoland/fresh"
          class="inline-block hover:text-black"
        >
        </a>
      </div>
    </div>
  );
}
