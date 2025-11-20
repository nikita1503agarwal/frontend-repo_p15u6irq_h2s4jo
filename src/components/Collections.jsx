import { Crown, Gem, Sparkles } from "lucide-react";

const collections = [
  { name: "Kirti", desc: "Heritage-inspired masterpieces.", icon: Crown },
  { name: "TIA", desc: "Timeless, intricate artistry.", icon: Sparkles },
  { name: "Royale Antique", desc: "Regal vintage aesthetics.", icon: Gem },
  { name: "Kshitja", desc: "Contemporary tradition.", icon: Sparkles },
  { name: "Avani", desc: "Nature-inspired elegance.", icon: Gem },
  { name: "Royale", desc: "Grand statements.", icon: Crown },
  { name: "Maharani", desc: "Majestic bridal sets.", icon: Crown },
  { name: "Maharani 2", desc: "A new royal chapter.", icon: Crown },
  { name: "Mayra", desc: "Minimal yet luxurious.", icon: Sparkles },
  { name: "Rajasa", desc: "Royal charm.", icon: Crown },
  { name: "Jija", desc: "Graceful traditions.", icon: Sparkles },
  { name: "Ratnasachi", desc: "Gem-studded artistry.", icon: Gem },
  { name: "Rukmini", desc: "Classical beauty.", icon: Crown },
  { name: "Soundarya", desc: "Everyday elegance.", icon: Sparkles },
  { name: "Sajani", desc: "Charming designs.", icon: Sparkles },
];

export default function Collections() {
  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Signature Collections</h2>
          <p className="text-gray-600 mt-2">Crafted with purity, surety and innovation</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map(({ name, desc, icon: Icon }) => (
            <div key={name} className="group rounded-2xl border border-amber-100 p-6 bg-gradient-to-b from-white to-amber-50/30 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 grid place-items-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <div className="font-bold text-lg text-gray-900">{name}</div>
              <div className="text-gray-600 text-sm mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
