import "./App.css";
import Navbar from "../../src/components/navbar";
import Hero from "../../src/components/hero";
import About from "../../src/components/about";
import Services from "../../src/components/services";
import Featured from "../../src/components/fetures";
import Footer from "../../src/components/footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
