import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react'; // Using Lucide for icons

const Header = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-0 my-0 border-t-2 border-blue-700">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Mobile Menu Toggle */}
          <div className="flex justify-between items-center w-full lg:w-auto">
            <div className="flex items-center">
              <span className="font-semibold text-xl tracking-tight text-gray-800">EXOMS</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="flex space-x-4">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#categories">Categories</NavLink>
            </div>

            {/* Search Bar */}
            <div className="relative ml-4">
              <input
                type="search"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="text-gray-500 h-5 w-5" />
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="flex space-x-2">
              <AuthButton href="#signin">Sign in</AuthButton>
              <AuthButton href="#login">Login</AuthButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <MobileNavLink href="#home">Home</MobileNavLink>
              <MobileNavLink href="#products">Products</MobileNavLink>
              <MobileNavLink href="#categories">Categories</MobileNavLink>
            </div>
            
            {/* Mobile Search */}
            <div className="px-2 pt-2 pb-3">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Search className="text-gray-500 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="px-2 pt-2 pb-3 space-y-2">
              <MobileAuthButton href="#signin">Sign in</MobileAuthButton>
              <MobileAuthButton href="#login">Login</MobileAuthButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Helper Components for cleaner code
const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-blue-700 hover:bg-blue-100 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

const AuthButton = ({ href, children }) => (
  <a 
    href={href} 
    className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-blue-700 hover:bg-blue-100 block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </a>
);

const MobileAuthButton = ({ href, children }) => (
  <a 
    href={href} 
    className="block w-full text-center text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
  >
    {children}
  </a>
);

export default Header;