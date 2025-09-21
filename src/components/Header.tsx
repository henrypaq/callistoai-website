'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Callisto
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Software Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('software')}
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Software
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'software' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                  <Link
                    href="/software/ai-platform"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    AI Platform
                  </Link>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('industries')}
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                  <div className="px-4 py-2 text-sm text-gray-500">Coming Soon</div>
                </div>
              )}
            </div>

            {/* Use Cases Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('use-cases')}
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Use Cases
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'use-cases' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50">
                  <Link
                    href="/use-cases/automation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Process Automation
                  </Link>
                  <Link
                    href="/use-cases/analytics"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Data Analytics
                  </Link>
                  <Link
                    href="/use-cases/customer-service"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Customer Service
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Login
            </Link>
            <Link
              href="/book-demo"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                href="/software/ai-platform"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Software
              </Link>
              <Link
                href="/use-cases/automation"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Use Cases
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Login
              </Link>
              <Link
                href="/book-demo"
                className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md"
              >
                Book Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
