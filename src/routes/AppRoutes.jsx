import { Routes, Route } from "react-router";
import React from "react";
import Home from "../pages/home";
import AboutUs from "../pages/about";
import ProductListing from "../pages/productlisting";
import ContactUs from "../pages/contactus";
import MainLayout from "../layout/Layout";
import Product from './../pages/product';
import Cart from './../pages/cart';
import Checkout from './../pages/checkout';
import ThankYou from './../pages/thankyou';
import Juice from './../pages/juice';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/productlisting" element={<ProductListing />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/Juice" element={<Juice />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;