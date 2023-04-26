import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Featured from "./components/fetures";
import Footer from "./components/footer";
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
