"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="top-0 z-50 bg-white sticky backdrop-filter backdrop-blur-xl bg-opacity-70">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <svg
                id="logo-35"
                width="50"
                height="39"
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                {" "}
                <path
                  d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                  fill="#007AFF"></path>{" "}
                <path
                  d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                  fill="#312ECB"></path>{" "}
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors font-semibold">
                {item.label}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transform transition-transform duration-300 ease-in-out">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-semibold block px-3 py-2 rounded-md text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}>
              {item.label}
            </Link>
          ))}
          <button
            className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            style={{
              transitionDelay: `${navItems.length * 50}ms`,
            }}>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
