import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="products" element={<Products />} />
        <Route path="products/product/:id" element={<Product />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="categories" element={<Categories />} />
        <Route
          path="*"
          element={<div className="text-center py-5">Page not found!</div>}
        />
      </Routes>
    </>
  );
}

export default App;
