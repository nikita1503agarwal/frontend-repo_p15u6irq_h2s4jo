import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#collections", label: "Collections" },
    { href: "#categories", label: "Categories" },
    { href: "#diamond", label: "Diamond Mahotsav" },
    { href: "#light", label: "Light Weight Jewellery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-amber-500 text-white grid place-items-center font-black">SJ</div>
          <div className="">
            <div className="font-extrabold tracking-tight text-gray-900">S S Nagarkar Jewellers</div>
            <div className="text-xs text-gray-500 -mt-0.5">Purity • Surety • Innovation</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-amber-700">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-amber-200 text-amber-800"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-amber-100 bg-white/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-3 grid gap-2 text-sm font-medium text-gray-800">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 rounded-lg hover:bg-amber-50"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
