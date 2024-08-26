import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Legacy from "./Components/Legacy/Legacy";
import Details from "./Components/Details/Details";
import Courtyard from "./Components/Courtyard/Courtyard";
import Design from "./Components/Design/Design";
import Gallary from "./Components/Gallery/Gallary";
import Lifestyle from "./Components/Lifstyle/Lifestyle";
import Reviews from "./Components/Review/Review";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Siteplan from "./Components/Siteplan/Siteplan";
import Floorplan from "./Components/Floorplan/Floorplan";

function App() {
  const legacyRef = useRef(null);
  const courtyardRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                legacyRef={legacyRef}
                courtyardRef={courtyardRef}
                contactRef={contactRef}
                footerRef={footerRef}
              />
              <div ref={legacyRef}>
                <Legacy />
              </div>
              <Details />
              <div ref={courtyardRef}>
                <Courtyard />
              </div>
              <Design />
              <Gallary />
              <Lifestyle />
              <Reviews />
              <div ref={contactRef}>
                <Contact />
              </div>
              <div ref={footerRef}>
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/siteplan" element={<Siteplan />} />
        <Route path="/floorplan" element={<Floorplan />} />
      </Routes>
    </Router>
  );
}

export default App;
