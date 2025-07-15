import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Header = ({ toggleMobileMenu, mobileMenuOpen, isActive }) => {
  return (
    <header className="bg-[#2B0D37] shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold font-serif text-white"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <span>Nari Parcham</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-medium transition-colors ${
                    isActive(to)
                      ? "text-white underline-offset-4 underline decoration-white"
                      : "text-white hover:text-secondary-light"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none transition-colors duration-200 text-white bg-primary hover:bg-accent/20 hover:border-white/0"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute py-4 w-full bg-primary/75 border-b-4 border-accent/20 left-0 backdrop-blur-md mt-3">
            <ul className="flex flex-col">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block py-1 px-4 font-medium transition-colors ${
                      isActive(to)
                        ? "text-white bg-accent-dark/20"
                      : "text-white hover:bg-purple-100 hover:text-secondary "
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;