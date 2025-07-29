import React from "react";
import { Outlet } from "react-router";
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
