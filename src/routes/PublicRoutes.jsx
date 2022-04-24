import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import NavMenu from "../components/common/NavMenu";
import Search from "../components/Search/Search";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const PublicRoutes = () => {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
  z;
};

export default PublicRoutes;
