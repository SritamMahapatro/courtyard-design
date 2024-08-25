import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Legacy from "./Components/Legacy/Legacy";
import Details from "./Components/Details/Details";
import Courtyard from "./Components/Courtyard/Courtyard";
import Design from "./Components/Design/Design";
import Gallary from "./Components/Gallery/Gallary";
import Reviews from "./Components/Review/Review";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Legacy/>
        <Details/>
        <Courtyard/>
        <Design />
        <Gallary />
        <Reviews/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;