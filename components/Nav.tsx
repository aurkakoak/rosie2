import navItems from "./menuitems.ts";
import { asset } from "$fresh/runtime.ts";

type Props = {
  active: string;
};

export default function Nav({ active }: Props) {
  return (
    <div class="mx-auto bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <img src={asset("/rosie.png")} alt="logo" class="h-24" />
      </div>
      <ul class="flex items-center gap-6">
        {navItems.map((menu) => (
          <li>
            <a
              href={menu.path}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.path === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
