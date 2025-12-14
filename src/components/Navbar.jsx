import { useState } from "react";
import { Barrel, Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 bg-linear-to-r from-white/90 to-blue-300/40
     backdrop-blur-md w-full py-6 px-6"
    >
      <div className="flex items-center justify-between">
        {/* Logo Left */}
        <main
          className={`text-2xl md:text-2xl font-semibold text-black ${
            open ? "hidden" : "block"
          } md:block`}
        >
          <Barrel className="inline size-7 mb-1 md:size-7 mb-2" />
          Brand<span className="text-blue-700">Boost</span>
        </main>

        {/* hidden md:flex -Navs right hidden on mobile, visible on tablet/desktop*/}
        <div className="hidden md:flex space-x-6 text-black text-md font-semibold gap-4">
          <a href="#services" className="cursor-pointer hover:text-blue-600">
            Services
          </a>
          <a
            href="#testimonials"
            className="cursor-pointer hover:text-blue-600"
          >
            Testimonials
          </a>
          <a href="" className="cursor-pointer hover:text-blue-600">
            Pricing
          </a>
          <a href="#about" className="cursor-pointer hover:text-blue-600">
            About
          </a>
        </div>
        
        {/* md:hidden - Mobile Menu hidden on default, visible on mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer text-black hover:text-blue-700"
        >
          {!open ? <Menu /> : <X />}
        </button>
      </div>

      {/* Moblie Menu navigation links*/}
      {open && (
        <div className="md:hidden text-lg text-black flex flex-col mt-3 gap-8 w-full items-center">
          <a href="#services" className="cursor-pointer hover:text-blue-600">
            Services
          </a>
          <a
            href="#testimonials"
            className="cursor-pointer hover:text-blue-600"
          >
            Testimonials
          </a>
          <a href="" className="cursor-pointer hover:text-blue-600">
            Pricing
          </a>
          <a href="#about" className="cursor-pointer hover:text-blue-600">
            About
          </a>
        </div>
      )}
    </nav>
  );
}
