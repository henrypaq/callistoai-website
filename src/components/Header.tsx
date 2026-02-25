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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = React.useRef(0);
  const pathname = usePathname();
  
  // Only apply scroll behavior on the home page
  const isHomePage = pathname === '/';
  const isResourcesPage = pathname?.startsWith('/resources');
  const isAboutPage = pathname?.startsWith('/about');
  const isContactPage = pathname?.startsWith('/contact');
  const isBookDemoPage = pathname?.startsWith('/book-demo');
  const isFileManagementPage = pathname?.startsWith('/software/file-management');
  const useLightText = (isHomePage && !isScrolled) || isAboutPage || isContactPage || isBookDemoPage || isFileManagementPage;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 60;
      setIsScrolled(scrolled);
      
      // Show/hide header based on scroll direction
      if (currentScrollY < 100) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        // Scrolling down - hide header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Check initial scroll position immediately
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle body class when dropdown is open for blur effect
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.classList.add('nav-dropdown-open');
    } else {
      document.body.classList.remove('nav-dropdown-open');
    }
    return () => {
      document.body.classList.remove('nav-dropdown-open');
    };
  }, [isDropdownOpen]);

  const headerPositionClass = "fixed top-0 left-0 right-0";

  const backgroundClass = isAboutPage
    ? "bg-black border-b border-gray-800 shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
    : isContactPage || isBookDemoPage
      ? "bg-transparent border-b border-transparent"
      : isResourcesPage
        ? "bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(15,23,42,0.08)]"
        : isHomePage
          ? isScrolled
            ? "bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(15,23,42,0.08)]"
            : "bg-transparent"
          : "bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(15,23,42,0.08)]";

  return (
    <header 
      className={cn(
        "transition-all duration-300 z-50",
        headerPositionClass,
        backgroundClass,
        !isHeaderVisible && "transform -translate-y-full"
      )}
      style={isHomePage && !isScrolled ? { backgroundColor: 'transparent' } : undefined}
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "relative flex items-center justify-between h-16 py-2",
          isHomePage && isScrolled && "py-2"
        )}>
          {/* Logo - left */}
          <div className="flex flex-shrink-0 items-center gap-2 z-10">
              <Link
                href="/"
                className="flex items-center gap-2"
              >
                <Image
                  src={useLightText ? "/logo-removebg-preview.png" : "/IMG_0075.PNG"}
                  alt="Callisto Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                  priority
                />
                <span
                  className={cn(
                    "text-xl font-bold transition-colors uppercase",
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

          {/* Desktop Navigation - centered in header, instant hover open */}
          <NavigationMenu 
            className="desktop-nav hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50" 
            delayDuration={0}
            onValueChange={(value) => setIsDropdownOpen(!!value)}
          >
              <NavigationMenuList className="flex list-none items-center justify-center gap-0.5 space-x-0">
              {/* Products Dropdown - Large card layout */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent px-4 py-2 rounded-md transition-colors hover:bg-transparent group text-sm font-medium",
                    (isHomePage && !isScrolled)
                      ? "text-gray-900 hover:text-gray-700"
                      : useLightText
                        ? "text-white hover:text-white/90"
                        : "text-gray-700 hover:text-black"
                  )}
                >
                  <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:opacity-0 after:bg-gradient-to-r after:from-violet-500 after:via-fuchsia-400 after:to-amber-400 after:transition-all after:duration-150 group-hover:after:w-full group-hover:after:opacity-100">
                    Products
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6" style={{ width: '880px' }}>
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-semibold text-gray-900">Products</span>
                      <Link href="/products" className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                    {/* Three columns - each is a full clickable card */}
                    <div className="grid grid-cols-3 gap-3">
                      {/* Steward Card */}
                      <NavigationMenuLink asChild>
                        <Link href="/software/steward" className="group/card block p-3 rounded-xl hover:bg-gray-100 transition-colors">
                          <div className="relative w-full h-[160px] mb-3 rounded-lg overflow-hidden">
                            <Image
                              src="/product-steward.png"
                              alt="Steward"
                              fill
                              className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                            />
                          </div>
                          <div>
                            <p className="text-2xl font-extrabold text-gray-900 group-hover/card:text-violet-600 transition-colors">Steward</p>
                            <p className="text-sm text-gray-500 mt-0.5">AI-powered workflow automation for repetitive tasks</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>

                      {/* Cortex Card */}
                      <NavigationMenuLink asChild>
                        <Link href="/software/cortex" className="group/card block p-3 rounded-xl hover:bg-gray-100 transition-colors">
                          <div className="relative w-full h-[160px] mb-3 rounded-lg overflow-hidden">
                            <Image
                              src="/product-cortex.png"
                              alt="Cortex"
                              fill
                              className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                            />
                          </div>
                          <div>
                            <p className="text-2xl font-extrabold text-gray-900 group-hover/card:text-emerald-600 transition-colors">Cortex</p>
                            <p className="text-sm text-gray-500 mt-0.5">Analytics platform for actionable insights</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>

                      {/* Control Station Card */}
                      <NavigationMenuLink asChild>
                        <Link href="/software/control-station" className="group/card block p-3 rounded-xl hover:bg-gray-100 transition-colors">
                          <div className="relative w-full h-[160px] mb-3 rounded-lg overflow-hidden">
                            <Image
                              src="/product-control-station.png"
                              alt="Control Station"
                              fill
                              className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                            />
                          </div>
                          <div>
                            <p className="text-2xl font-extrabold text-gray-900 group-hover/card:text-rose-600 transition-colors">Control Station</p>
                            <p className="text-sm text-gray-500 mt-0.5">Centralized storage with powerful search</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>

                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent px-4 py-2 rounded-md transition-colors hover:bg-transparent group text-sm font-medium",
                    (isHomePage && !isScrolled)
                      ? "text-gray-900 hover:text-gray-700"
                      : useLightText
                        ? "text-white hover:text-white/90"
                        : "text-gray-700 hover:text-black"
                  )}
                >
                  <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:opacity-0 after:bg-gradient-to-r after:from-violet-500 after:via-fuchsia-400 after:to-amber-400 after:transition-all after:duration-150 group-hover:after:w-full group-hover:after:opacity-100">
                    Industries
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-8" style={{ width: '780px' }}>
                    <div className="flex gap-8">
                      {/* Left side - Industries list */}
                      <div className="flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-4">INDUSTRIES</p>
                        <div className="space-y-0.5">
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none rounded-lg px-4 py-2.5 text-base font-medium text-gray-900 outline-none transition-colors hover:bg-gray-100"
                              href="/industries/home-services"
                            >
                              Home Service Businesses
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none rounded-lg px-4 py-2.5 text-base font-medium text-gray-900 outline-none transition-colors hover:bg-gray-100"
                              href="/industries/finance"
                            >
                              Financial Services
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none rounded-lg px-4 py-2.5 text-base font-medium text-gray-900 outline-none transition-colors hover:bg-gray-100"
                              href="/industries/retail"
                            >
                              Retail & E-commerce
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none rounded-lg px-4 py-2.5 text-base font-medium text-gray-900 outline-none transition-colors hover:bg-gray-100"
                              href="/industries/legal"
                            >
                              Legal Services
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none rounded-lg px-4 py-2.5 text-base font-medium text-gray-900 outline-none transition-colors hover:bg-gray-100"
                              href="/industries/marketing"
                            >
                              Social Media & Marketing
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* Right side - Featured card */}
                      <div className="w-[340px] flex">
                        <Link href="/book-demo" className="group/card block flex-1">
                          <div className="relative w-full h-full min-h-[240px] rounded-xl overflow-hidden">
                            <Image
                              src="/gradients/Whimsical Washes_004.png"
                              alt="Custom Solutions"
                              fill
                              className="object-cover"
                            />
                            {/* Dark overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            {/* Content overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <p className="text-white font-semibold text-lg flex items-center gap-1.5 mb-2">
                                Custom Solutions
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </p>
                              <p className="text-white/80 text-sm">
                                Tailored AI solutions built for your industry needs
                              </p>
                            </div>
                          </div>
                        </Link>
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
                      "bg-transparent px-4 py-2 rounded-md transition-colors hover:bg-transparent group text-sm font-medium",
                      (isHomePage && !isScrolled)
                        ? "text-gray-900 hover:text-gray-700"
                        : useLightText
                          ? "text-white hover:text-white/90"
                          : "text-gray-700 hover:text-black"
                    )}
                  >
                    <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:opacity-0 after:bg-gradient-to-r after:from-violet-500 after:via-fuchsia-400 after:to-amber-400 after:transition-all after:duration-150 group-hover:after:w-full group-hover:after:opacity-100">
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
                      "bg-transparent px-4 py-2 rounded-md transition-colors hover:bg-transparent group text-sm font-medium",
                      (isHomePage && !isScrolled)
                        ? "text-gray-900 hover:text-gray-700"
                        : useLightText
                          ? "text-white hover:text-white/90"
                          : "text-gray-700 hover:text-black"
                    )}
                  >
                    <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:opacity-0 after:bg-gradient-to-r after:from-violet-500 after:via-fuchsia-400 after:to-amber-400 after:transition-all after:duration-150 group-hover:after:w-full group-hover:after:opacity-100">
                      Company
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact - in nav with others */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cn(
                      "bg-transparent px-4 py-2 rounded-md transition-colors hover:bg-transparent group text-sm font-medium",
                      (isHomePage && !isScrolled)
                        ? "text-gray-900 hover:text-gray-700"
                        : useLightText
                          ? "text-white hover:text-white/90"
                          : "text-gray-700 hover:text-black"
                    )}
                  >
                    <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:opacity-0 after:bg-gradient-to-r after:from-violet-500 after:via-fuchsia-400 after:to-amber-400 after:transition-all after:duration-150 group-hover:after:w-full group-hover:after:opacity-100">
                      Contact
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side - CTA button only (Contact is in nav) */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold text-white bg-black transition-colors hover:bg-gray-800"
            >
              Book a Call
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
                  Company
                </Link>
                <Link
                  href="/contact"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Contact
                </Link>
              </div>

              <div className="pt-4 space-y-2">
                <Link
                  href="/book-demo"
                  className="block px-4 py-2.5 text-base font-semibold rounded-full text-center text-white bg-black hover:bg-gray-800"
                >
                  Book a Call
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
