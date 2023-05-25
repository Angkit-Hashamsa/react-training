// import TodoInput from "./components/todoInput";
// import TodoList from "./components/todoList";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import Chart from "./pages/About/Chart";
import Dashboard from "./pages/About/Dashboard";
import Market from "./pages/About/Market";
import Result from "./pages/About/Result";
import Error from "./pages/Error";
import "./index.css";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />}>
                    <Route index element={<Dashboard />} />
                    <Route path="chart" element={<Chart />} />
                    <Route path="market" element={<Market />} />
                    <Route path="result" element={<Result />} />
                </Route>
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Product/:id" element={<SingleProduct />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default App;
