import React from 'react'
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "F" },
  { href: "#", label: "T" },
  { href: "#", label: "I" },
  { href: "#", label: "L" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="container px-10 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-3 sm:mb-4">
              Nari Parcham
            </h2>
            <p className="text-gray-300 font-serif text-sm sm:text-base">
              Advancing grassroots feminist resistance and collective healing
              for justice, dignity, and liberation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold font-serif mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-serif mb-3 sm:mb-4 text-sm sm:text-base">
              Contact
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              13/70, Pakka bagh
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Saharanpur, UP
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              parchamnari@gmail.com
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Dr Qudsiya Anjum- 9837378699 <br />
              Wajahat Mazahar Khan- 9058564603
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 font-serif sm:mb-4 text-sm sm:text-base">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="bg-primary-light hover:bg-accent p-2 rounded-full transition-colors text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-light mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300 text-sm sm:text-base">
          <p>
            © {new Date().getFullYear()} Nari Parcham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer