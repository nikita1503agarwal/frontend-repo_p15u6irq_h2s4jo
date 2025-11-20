import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-amber-500 text-white grid place-items-center font-black">SJ</div>
          <div className="">
            <div className="font-extrabold tracking-tight text-gray-900">S S Nagarkar Jewellers</div>
            <div className="text-xs text-gray-500 -mt-0.5">Purity • Surety • Innovation</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-amber-700">Home</a>
          <a href="#about" className="hover:text-amber-700">About Us</a>
          <a href="#collections" className="hover:text-amber-700">Collections</a>
          <a href="#diamond" className="hover:text-amber-700">Diamond Mahotsav</a>
          <a href="#light" className="hover:text-amber-700">Light Weight Jewellery</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-amber-200 text-amber-800">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
