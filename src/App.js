import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Services />
      <Destination />
      <Contact />
      <Footer />
    </div>
  )
}
export default App; 