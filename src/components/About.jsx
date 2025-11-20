export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">About Us</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Established in 1952, we have been finely mastering culture, tradition and jewellery with purity and innovation. As a leading jewellery brand in Pune, we are known for our purity, surety and innovative jewellery designs.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
            <li>Legacy of trust since 1952</li>
            <li>Signature collections blending heritage and modernity</li>
            <li>Multiple showrooms across Pune and Thane</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-amber-50 border border-amber-100 p-8">
          <div className="text-6xl text-center">✨</div>
          <p className="text-center text-amber-900 font-semibold mt-4">Purity • Surety • Innovation</p>
        </div>
      </div>
    </section>
  );
}
