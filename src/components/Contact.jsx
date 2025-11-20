import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const locations = [
  {
    title: "Shop 1",
    addr: "Tulshibag, Pune",
  },
  {
    title: "Shop 2",
    addr: "Ganpati Chowk, Laxmi Road, Pune",
  },
  {
    title: "Shop 3",
    addr: "Shop No. 2, Ground Floor, Priyadarshini Building, Opp. RBL Bank, Ram Maruti Road, Thane 400 602",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 mt-2">We’d love to help you. Schedule a video call or visit our showrooms.</p>

            <div className="mt-6 space-y-3 text-gray-800">
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-amber-700" /> +91 020 2444 4045</div>
              <div className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-green-600" /> +91 9921 11 3113</div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-amber-700" /> ssnagarkarinfo@gmail.com</div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {locations.map((l) => (
                <div key={l.title} className="rounded-xl bg-white p-4 border border-amber-100">
                  <div className="font-semibold text-gray-900 flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-700" />{l.title}</div>
                  <div className="text-gray-600 text-sm mt-1">{l.addr}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-amber-100">
            <h3 className="font-bold text-gray-900 text-lg">Schedule a Video Call</h3>
            <p className="text-sm text-gray-600 mb-4">Fill the form and we will reach out shortly.</p>
            <form className="grid gap-4">
              <input className="w-full rounded-lg border border-amber-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Your Name" />
              <input className="w-full rounded-lg border border-amber-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Email" />
              <input className="w-full rounded-lg border border-amber-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Phone" />
              <textarea className="w-full rounded-lg border border-amber-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" rows="4" placeholder="Message"></textarea>
              <button type="button" className="rounded-lg px-5 py-2 bg-amber-600 text-white font-semibold hover:bg-amber-700">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
