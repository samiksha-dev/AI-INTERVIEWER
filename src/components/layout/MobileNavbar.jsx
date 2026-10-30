import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoContainer from "./LogoContainer";
import NavigationItems from "./NavigationItems";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top navbar - does NOT move */}
      <header className="h-16 px-4 flex items-center justify-between bg-dark-blue">
        <LogoContainer />

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-white"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-dark-blue
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-4">
          <LogoContainer />

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <div className="px-4">
          <NavigationItems />
        </div>
      </aside>
    </>
  );
};
export default MobileNavbar;