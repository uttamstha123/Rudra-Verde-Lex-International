import "@/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Maintenance } from "./pages/Maintenance";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { PracticeOrientation } from "./pages/PracticeOrientation";
import { Values } from "./pages/Values";
import { Contact } from "./pages/Contact";

const siteMode = (process.env.REACT_APP_SITE_MODE || "live").toLowerCase();
const isMaintenanceMode = ["maintenance", "maintainence", "true", "1", "on"].includes(
  siteMode,
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {isMaintenanceMode ? (
          <Routes>
            <Route path="*" element={<Maintenance />} />
          </Routes>
        ) : (
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/practice" element={<PracticeOrientation />} />
              <Route path="/values" element={<Values />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
