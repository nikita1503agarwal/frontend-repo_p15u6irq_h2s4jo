export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">About Us</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Finely mastering culture, tradition and jewellery with purity and innovation since 1952. We are a leading jewellery brand in Pune known for purity, surety and innovative jewellery designs.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-900">Showrooms</h3>
            <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
              <li>Shop 1: Tulshibag, Pune</li>
              <li>Shop 2: Ganpati Chowk, Laxmi Road, Pune</li>
              <li>Shop 3: Shop No. 2, Ground Floor, Priyadarshini Building, Opp. RBL Bank, Ram Maruti Road, Thane 400 602</li>
            </ul>
          </div>

          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>
              Also listed on directories as <span className="font-medium text-gray-800">Shripad Shankar Nagarkar Jewellers</span>,
              address: No 1160, Ganpati Chowk, Laxmi Road, Budhwar Peth, Pune – 411002.
            </p>
            <p>
              Related corporate entity: <span className="font-medium text-gray-800">Nagarkar Jewels and Gems Private Limited</span>,
              CIN U74999PN2017PTC172028, registered at 1505 Sadashiv Peth, Pune.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-amber-50 border border-amber-100 p-8">
          <div className="text-6xl text-center">✨</div>
          <p className="text-center text-amber-900 font-semibold mt-4">Purity • Surety • Innovation</p>
          <div className="mt-6 text-center text-sm text-gray-700">
            Follow us on Instagram @ssnagarkarjewellers and Facebook for latest designs and updates.
          </div>
        </div>
      </div>
    </section>
  );
}
