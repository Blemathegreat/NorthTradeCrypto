import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Investor', to: '/investor' },
    { name: 'Products', to: '/product' },
    { name: 'Roadmap', to: '/roadmap' },
    { name: 'About', to: '/about' },
    { name: 'Support', to: '/support' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#181A20] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              className="w-24 sm:w-28 lg:w-36 h-auto" 
              src="./logo.png" 
              alt="Company Logo" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative font-semibold text-base xl:text-lg transition-colors duration-200 hover:text-[#00A3FF] ${
                        isActive ? 'text-[#00A3FF]' : 'text-white'
                      }`
                    }
                    onClick={closeMobileMenu}
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00A3FF] rounded"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink to="/login">
              <button className="bg-transparent border border-[#00A3FF] text-[#00A3FF] px-4 xl:px-6 py-2 rounded-md font-semibold hover:bg-[#00A3FF] hover:text-white transition-all duration-200 text-sm xl:text-base">
                Log In
              </button>
            </NavLink>
            
            <NavLink to="/signup">
              <button className="bg-[#00A3FF] text-white px-4 xl:px-6 py-2 rounded-md font-semibold hover:bg-[#0086cc] transition-colors duration-200 text-sm xl:text-base">
                Sign Up
              </button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#00A3FF] transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
                            {isMobileMenuOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-[#202E48] border-t border-gray-700">
          {/* Mobile Navigation Links */}
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#00A3FF] bg-[#181A20]' 
                      : 'text-white hover:text-[#00A3FF] hover:bg-[#181A20]'
                  }`
                }
                onClick={closeMobileMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className="px-4 py-4 border-t border-gray-700 space-y-3">
            <NavLink to="/login" className="block">
              <button 
                className="w-full bg-transparent border border-[#00A3FF] text-[#00A3FF] py-3 rounded-md font-semibold hover:bg-[#00A3FF] hover:text-white transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Log In
              </button>
            </NavLink>
            
            <NavLink to="/signup" className="block">
              <button 
                className="w-full bg-[#00A3FF] text-white py-3 rounded-md font-semibold hover:bg-[#0086cc] transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}