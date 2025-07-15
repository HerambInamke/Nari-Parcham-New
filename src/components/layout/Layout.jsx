import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return (
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
    );
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} isActive={isActive} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
