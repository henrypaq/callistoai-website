'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Only apply scroll behavior on the home page
  const isHomePage = pathname === '/';
  const isResourcesPage = pathname?.startsWith('/resources');
  const isAboutPage = pathname?.startsWith('/about');
  const isContactPage = pathname?.startsWith('/contact');
  const useLightText = (isHomePage && !isScrolled) || isAboutPage || isContactPage;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Only apply scroll behavior on the home page
    if (!isHomePage) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
      setIsScrolled(scrolled);
    };

    // Check initial scroll position immediately
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const headerPositionClass = isHomePage
    ? isScrolled
      ? "fixed top-0 left-0 right-0"
      : "absolute top-0 left-0 right-0"
    : "sticky top-0 left-0 right-0";

  const backgroundClass = isAboutPage
    ? "bg-black border-b border-gray-800 shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
    : isContactPage
      ? "bg-transparent border-b border-transparent"
      : isResourcesPage
        ? "bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(15,23,42,0.08)]"
        : isHomePage
          ? isScrolled
            ? "bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(15,23,42,0.08)]"
            : "bg-transparent"
          : "bg-black/80 backdrop-blur border-b border-white/10";

  return (
    <header 
      className={cn(
        "transition-all duration-300 z-50",
        headerPositionClass,
        backgroundClass
      )}
      style={isHomePage && !isScrolled ? { backgroundColor: 'transparent' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-3"
              >
                <Image
                  src="/IMG_0075.PNG"
                  alt="Callisto Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
                <span
                  className={cn(
                    "text-2xl font-bold transition-colors uppercase",
                    (isHomePage && !isScrolled)
                      ? "text-gray-900"
                      : useLightText ? "text-white" : "text-gray-900"
                  )}
                  style={{ fontFamily: 'var(--font-red-hat-display)' }}
                >
                  Callisto
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex relative z-50">
              <NavigationMenuList className="flex list-none items-center justify-start space-x-1">
              {/* Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent px-6 py-3 rounded-md transition-colors hover:bg-transparent group",
                    (isHomePage && !isScrolled)
                      ? "text-gray-900 hover:text-gray-700"
                      : useLightText
                        ? "text-white hover:text-white/90"
                        : "text-gray-700 hover:text-black"
                  )}
                >
                  <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:opacity-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:opacity-100">
                    Products
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                    <div className="space-y-6">
                              {/* Featured Case Study */}
                              <NavigationMenuLink asChild>
                                <Link
                                  className="group flex items-start space-x-4 p-5 rounded-xl hover:bg-gray-50/50 transition-all duration-200 border border-transparent hover:border-gray-200"
                                  href="/software/file-management"
                                >
                                  <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                      <span className="text-white font-bold text-lg">📁</span>
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-900 transition-colors mb-1.5">
                                      File Management System
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                      Advanced file organization and management system with AI-powered categorization, search, and collaboration features.
                                    </p>
                                  </div>
                                  <div className="flex-shrink-0 text-gray-400 group-hover:text-gray-600 transition-colors">
                                    →
                                  </div>
                                </Link>
                              </NavigationMenuLink>

                      {/* Other Options */}
                      <div className="grid grid-cols-2 gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-200 border border-transparent hover:border-gray-200"
                            href="/software/analytics"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">📊</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-900 transition-colors mb-1.5">
                                Analytics Suite
                              </h4>
                              <p className="text-xs text-gray-500 leading-relaxed">
                                Advanced data analytics and insights platform.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-200 border border-transparent hover:border-gray-200"
                            href="/software/automation"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">⚡</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-900 transition-colors mb-1.5">
                                Automation Engine
                              </h4>
                              <p className="text-xs text-gray-500 leading-relaxed">
                                Intelligent workflow automation tools.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-200 border border-transparent hover:border-gray-200"
                            href="/software/integration"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">🔗</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-900 transition-colors mb-1.5">
                                Integration Hub
                              </h4>
                              <p className="text-xs text-gray-500 leading-relaxed">
                                Seamless third-party integrations.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <div className="group flex items-start space-x-3 p-4 rounded-xl bg-gray-50/50 border border-gray-100 opacity-60">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">🔒</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-500 mb-1.5">
                              Security Suite
                            </h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              Coming Soon
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent px-6 py-3 rounded-md transition-colors hover:bg-transparent group",
                    (isHomePage && !isScrolled)
                      ? "text-gray-900 hover:text-gray-700"
                      : useLightText
                        ? "text-white hover:text-white/90"
                        : "text-gray-700 hover:text-black"
                  )}
                >
                  <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:opacity-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:opacity-100">
                    Industries
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                    <div className="space-y-6">
                      {/* Featured Case Study */}
                      <NavigationMenuLink asChild>
                        <Link
                          className="group flex items-start space-x-4 p-5 rounded-xl hover:bg-gray-50/50 transition-all duration-200 border border-transparent hover:border-gray-200"
                          href="/industries/healthcare"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-lg">🏥</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-900 transition-colors mb-1.5">
                              Healthcare Solutions
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                              AI solutions for medical diagnosis and patient care to improve healthcare outcomes. Revolutionize healthcare with intelligent automation.
                            </p>
                          </div>
                          <div className="flex-shrink-0 text-gray-400 group-hover:text-gray-600 transition-colors">
                            →
                          </div>
                        </Link>
                      </NavigationMenuLink>

                      {/* Other Options */}
                      <div className="grid grid-cols-2 gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-200 border border-transparent hover:border-gray-200"
                            href="/industries/finance"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">💰</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-900 transition-colors mb-1.5">
                                Financial Services
                              </h4>
                              <p className="text-xs text-gray-500 leading-relaxed">
                                Risk assessment and fraud detection systems.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-200 border border-transparent hover:border-gray-200"
                            href="/industries/manufacturing"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">🏭</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-900 transition-colors mb-1.5">
                                Manufacturing
                              </h4>
                              <p className="text-xs text-gray-500 leading-relaxed">
                                Predictive maintenance and quality control.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-200 border border-transparent hover:border-gray-200"
                            href="/industries/retail"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">🛍️</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gray-900 transition-colors mb-1.5">
                                Retail & E-commerce
                              </h4>
                              <p className="text-xs text-gray-500 leading-relaxed">
                                Customer insights and inventory optimization.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <div className="group flex items-start space-x-3 p-4 rounded-xl bg-gray-50/50 border border-gray-100 opacity-60">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">🚀</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-500 mb-1.5">
                              Technology
                            </h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              Coming Soon
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Button */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resources"
                    className={cn(
                      "bg-transparent px-6 py-3 rounded-md transition-colors hover:bg-transparent group",
                      (isHomePage && !isScrolled)
                        ? "text-gray-900 hover:text-gray-700"
                        : useLightText
                          ? "text-white hover:text-white/90"
                          : "text-gray-700 hover:text-black"
                    )}
                  >
                    <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:opacity-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:opacity-100">
                      Resources
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(
                      "bg-transparent px-6 py-3 rounded-md transition-colors hover:bg-transparent group",
                      (isHomePage && !isScrolled)
                        ? "text-gray-900 hover:text-gray-700"
                        : useLightText
                          ? "text-white hover:text-white/90"
                          : "text-gray-700 hover:text-black"
                    )}
                  >
                    <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:opacity-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:opacity-100">
                      About
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <Link
              href="/contact"
              className={cn(
                "relative bg-transparent px-5 py-2.5 rounded-md transition-all duration-300 hover:bg-transparent group hover:scale-105",
                (isHomePage && !isScrolled)
                  ? "text-white hover:text-white/90"
                  : useLightText
                    ? "text-white hover:text-white/90"
                    : "text-gray-900 hover:text-gray-700"
              )}
            >
              <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:opacity-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:opacity-100">
                Contact
              </span>
            </Link>
            <Link
              href="/book-consultation"
              className={cn(
                "inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 hover:scale-105 hover:shadow-lg",
                (isHomePage && !isScrolled)
                  ? "text-white bg-transparent border-white/80 hover:border-white hover:bg-white hover:text-gray-900"
                  : "text-gray-900 bg-transparent border-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              )}
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn(
                "transition-colors",
                useLightText ? "text-white hover:text-white/80" : "text-gray-700 hover:text-black"
              )}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={cn(
                "px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-b-3xl",
                useLightText
                  ? "bg-white/95 text-gray-900 border-t border-white/20 backdrop-blur"
                  : "bg-white text-gray-900 border-t border-gray-200"
              )}
            >
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Products
                </div>
                        <Link
                          href="/software/file-management"
                          className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          File Management System
                        </Link>
              </div>
              
              <div className="space-y-1">
                <Link
                  href="/resources"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Resources
                </Link>
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Company
                </div>
                <Link
                  href="/about"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  About
                </Link>
              </div>

              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Contact
                </Link>
                <Link
                  href="/book-consultation"
                  className="block px-4 py-2 text-base font-semibold rounded-full transition-all duration-300 border-2 text-center text-white bg-transparent border-white/80 hover:border-white hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-lg"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
