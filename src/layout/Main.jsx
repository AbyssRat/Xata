import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Contact from "../pages/Contact.jsx";
import Cart from "../pages/Cart.jsx";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<h2>404 - Page Not Found</h2>} />
            </Routes>
        </main>
    );
}
export default Main;
