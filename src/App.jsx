import Contact from "./components/Contact";
import Features from "./components/Features";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Works />
      <Features />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
