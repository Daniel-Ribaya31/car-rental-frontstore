"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-group")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl logo-sm font-semibold font-display whitespace-nowrap transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Toyota <span className="text-[#F28C28]">Rent&#x3B1;Car</span>
          </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden lg:flex items-center space-x-6 font-medium nav-desktop-sm nav-desktop-gap transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <li>
              <Link href="/" className="hover:text-[#F28C28]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/vehicles" className="hover:text-[#F28C28]">
                Vehicles
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#F28C28]">
                Services
              </Link>
            </li>

            {/* Corporate Dropdown */}
            <li className="relative dropdown-group">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "corporate" ? null : "corporate")
                }
                className={`flex items-center gap-1 hover:text-[#F28C28]`}
              >
                Corporate Programs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul
                className={`absolute left-0 top-full flex flex-col bg-white shadow-lg rounded-lg mt-2 w-56 py-2 z-50 text-gray-700 transition-all duration-200 ${
                  openDropdown === "corporate"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-red-50">
                    Corporate Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-red-50">
                    Long-Term Rentals/Lease
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-red-50">
                    Fleet Management
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="#" className="hover:text-[#F28C28]">
                For Japanese Customers
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="relative dropdown-group">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "about" ? null : "about")
                }
                className={`flex items-center gap-1 transition hover:text-[#F28C28]`}
              >
                About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul
                className={`absolute left-0 top-full flex flex-col bg-white shadow-lg rounded-lg mt-2 w-48 py-2 z-50 text-gray-700 transition-all duration-200 ${
                  openDropdown === "about"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <li>
                  <Link href="/about/companyInfo" className="block px-4 py-2 hover:bg-red-50">
                    Company Info
                  </Link>
                </li>
                <li>
                  <Link href="/about/faq" className="block px-4 py-2 hover:bg-red-50">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="https://toyota-mobilitysolutions.ph/careers" className="block px-4 py-2 hover:bg-red-50">
                    Careers
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4 auth-sm">
            <Link
              href="#"
              className={`transition-colors duration-300 auth-sm ${
                scrolled ? "text-gray-700 hover:text-[#F28C28]" : "text-white hover:text-red-400"
              }`}
            >
              Login
            </Link>
            <Link
              href="#"
              className="bg-[#F28C28] text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition auth-register-sm"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full border-t border-gray-100 z-40 transform transition-all duration-500 ease-in-out overflow-hidden ${
          scrolled ? "bg-white text-gray-700 shadow-lg" : "bg-black/70 text-white"
        } ${mobileMenuOpen ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-3"}`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-3 font-medium">
          <li>
            <Link href="/" className="block hover:text-[#F28C28]">Home</Link>
          </li>
          <li>
            <Link href="/vehicles" className="block hover:text-[#F28C28]">Vehicles</Link>
          </li>
          <li>
            <Link href="/services" className="block hover:text-[#F28C28]">Services</Link>
          </li>

          {/* Corporate Programs dropdown (mobile) */}
          <li className="dropdown-group">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "mobile-corporate" ? null : "mobile-corporate")
              }
              className="flex justify-between items-center w-full hover:text-[#F28C28]"
            >
              Corporate Programs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "mobile-corporate" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul
              className={`pl-4 mt-2 space-y-2 text-sm transition-all duration-200 ${
                openDropdown === "mobile-corporate"
                  ? "max-h-40 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible overflow-hidden"
              }`}
            >
              <li><Link href="#" className="block hover:text-[#F28C28]">Corporate Account</Link></li>
              <li><Link href="#" className="block hover:text-[#F28C28]">Long-Term Rentals/Lease</Link></li>
              <li><Link href="#" className="block hover:text-[#F28C28]">Fleet Management</Link></li>
            </ul>
          </li>

          {/* About dropdown (mobile) */}
          <li className="dropdown-group">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "mobile-about" ? null : "mobile-about")
              }
              className="flex justify-between items-center w-full hover:text-[#F28C28]"
            >
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "mobile-about" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul
              className={`pl-4 mt-2 space-y-2 text-sm transition-all duration-200 ${
                openDropdown === "mobile-about"
                  ? "max-h-40 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible overflow-hidden"
              }`}
            >
              <li><Link href="/about/companyInfo" className="block hover:text-[#F28C28]">Company Info</Link></li>
              <li><Link href="/about/faq" className="block hover:text-[#F28C28]">FAQ</Link></li>
              <li><Link href="https://toyota-mobilitysolutions.ph/careers" className="block hover:text-[#F28C28]">Careers</Link></li>
            </ul>
          </li>
        </ul>

        {/* Right-aligned Login/Register */}
        <div className="flex justify-end items-center px-6 pb-4 space-x-3">
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#F28C28] transition"
          >
            Login
          </Link>
          <Link
            href="#"
            className="bg-[#F28C28] text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-500 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}