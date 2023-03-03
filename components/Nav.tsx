const items = [
  { name: "About", path: "/about" },
  { name: "Case Study", path: "/case-study" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
export function Nav() {
  return (
    <nav class="bg-gray-800">
      <ul class="flex justify-between items-center px-8 py-4">
        {items.map((item) => (
          <li>
            <a href={item.path} class="text-gray-300 hover:text-white">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
