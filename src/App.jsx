import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collections from "./components/Collections";
import Categories from "./components/Categories";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <About />
        <Collections />
        <Categories />
        <section id="diamond" className="py-16 bg-amber-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold">Diamond Mahotsav</h2>
            <p className="text-gray-700 mt-2">Exclusive diamond festival with curated designs and offers.</p>
          </div>
        </section>
        <section id="light" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold">Light Weight Jewellery</h2>
            <p className="text-gray-700 mt-2">Elegant everyday designs crafted for comfort and style.</p>
          </div>
        </section>
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-600 bg-white border-t">
          Copyright © 2025 S S Nagarkar Jewellers | Powered by MTWILIGHT
        </footer>
      </main>
    </div>
  );
}

export default App;
