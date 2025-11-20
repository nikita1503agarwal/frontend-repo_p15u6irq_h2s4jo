import { Gem, Ring, Diamond, Flower2, CircleDot, Sparkles } from "lucide-react";

const categories = [
  { name: "Necklace", icon: Gem },
  { name: "Earrings", icon: Sparkles },
  { name: "Rings", icon: Ring },
  { name: "Bangles", icon: CircleDot },
  { name: "Nath (Nose-ring)", icon: Flower2 },
  { name: "Mangalsutra", icon: Diamond },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Product Categories</h2>
          <p className="text-gray-600 mt-2">Explore everyday to bridal essentials</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map(({ name, icon: Icon }) => (
            <div key={name} className="group rounded-2xl border border-amber-100 bg-white p-6 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 grid place-items-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <div className="font-semibold text-gray-900">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
