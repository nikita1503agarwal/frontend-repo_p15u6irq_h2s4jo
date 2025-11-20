import { Sparkles, Diamond, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-900 px-4 py-2 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Since 1952 • Purity • Surety • Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              S S Nagarkar Jewellers
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
              Finely mastering culture, tradition and jewellery with purity and innovation since 1952. Leading jewellery brand in Pune.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#collections" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:bg-amber-700 transition">
                <Diamond className="w-5 h-5" /> Explore Collections
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition">
                <Phone className="w-5 h-5" /> Contact Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-amber-500/10 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-amber-100 via-white to-amber-50 p-1 shadow-xl">
              <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center text-8xl">
                💎
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
