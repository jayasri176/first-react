import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("Template store");

  const menuItems = [
    "GIT",
    "GIT Commands",
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
              active === item ? "text-blue-400" : "text-gray-300"
            }`}
            onClick={() => setActive(item)}
          >
            {item === "Template store" ? (
              <LayoutGrid size={18} />
            ) : (
              <ChevronRight size={16} />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
