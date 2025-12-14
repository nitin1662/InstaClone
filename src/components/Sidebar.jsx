export default function Sidebar() {
  const menu = [
    "Home",
    "Search",
    "Explore",
    "Messages",
    "Notifications",
    "Create",
    "Profile",
  ];

  return (
    <div className="w-[240px] h-screen fixed border-r px-6 py-8 hidden lg:block">
      <h1 className="text-2xl font-semibold mb-10">Instagram</h1>

      <ul className="space-y-6 text-sm">
        {menu.map((item) => (
          <li
            key={item}
            className="flex items-center gap-4 cursor-pointer hover:text-black text-gray-700"
          >
            ⬤ {item}
          </li>
        ))}
      </ul>

      <div className="absolute bottom-8 text-sm text-gray-600">
        ⬤ More
      </div>
    </div>
  );
}
