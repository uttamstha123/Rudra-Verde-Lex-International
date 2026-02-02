import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { PracticeOrientation } from "./pages/PracticeOrientation";
import { Values } from "./pages/Values";
import { People } from "./pages/People";
import { Publications } from "./pages/Publications";
import { Contact } from "./pages/Contact";
import { Disclaimer } from "./pages/Disclaimer";
import React, { useEffect, useState } from "react";
import { Loader } from "./components/Loader";

function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate progressive loading to 100% with a smooth cadence
    const start = performance.now();
    const targetMs = Math.random() * 100 + 500; // ~1.7s feels premium and calm

    const tick = () => {
      const elapsed = performance.now() - start;
      const next = Math.min(100, Math.floor((elapsed / targetMs) * 100));
      setProgress((p) => (next > p ? next : p));
      if (next < 100) {
        requestAnimationFrame(tick);
      } else {
        // Small grace to avoid abrupt transition
        setTimeout(() => setLoading(false), 300);
      }
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const taglines = [
    "Integrity. Insight. Impact.",
    "Precision with perspective.",
    "Law grounded in values.",
    "Advocacy with clarity.",
  ];

  return (
    <div className="App">
      {loading ? (
        <Loader progress={progress} taglines={taglines} />
      ) : (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/practice" element={<PracticeOrientation />} />
              <Route path="/values" element={<Values />} />
              <Route path="/people" element={<People />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
