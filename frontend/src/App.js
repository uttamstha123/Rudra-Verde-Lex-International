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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
