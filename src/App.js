// import TodoInput from "./components/todoInput";
// import TodoList from "./components/todoList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
