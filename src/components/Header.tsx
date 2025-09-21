'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                  <NavigationMenu className="hidden md:flex relative z-50">
                    <NavigationMenuList>
              {/* Software Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 bg-white px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                  Software
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] bg-white rounded-lg shadow-lg border">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                          href="/software/ai-platform"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            AI Platform
                          </div>
                          <p className="text-sm leading-tight text-gray-600">
                            Comprehensive AI platform for enterprise automation, analytics, and intelligent decision making.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/software/ai-platform" title="AI Platform">
                      Complete AI solution for your business needs
                    </ListItem>
                    <ListItem href="/software/analytics" title="Analytics Suite">
                      Advanced data analytics and insights platform
                    </ListItem>
                    <ListItem href="/software/automation" title="Automation Engine">
                      Intelligent workflow automation tools
                    </ListItem>
                    <ListItem href="/software/integration" title="Integration Hub">
                      Seamless third-party integrations and APIs
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 bg-white px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] bg-white rounded-lg shadow-lg border">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Industries
                          </div>
                          <p className="text-sm leading-tight text-gray-600">
                            Industry-specific AI solutions for your sector.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/industries/healthcare" title="Healthcare">
                      AI solutions for medical diagnosis and patient care
                    </ListItem>
                    <ListItem href="/industries/finance" title="Financial Services">
                      Risk assessment and fraud detection systems
                    </ListItem>
                    <ListItem href="/industries/manufacturing" title="Manufacturing">
                      Predictive maintenance and quality control
                    </ListItem>
                    <ListItem href="/industries/retail" title="Retail & E-commerce">
                      Customer insights and inventory optimization
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Use Cases Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 bg-white px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                  Use Cases
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-lg shadow-lg border">
                    <ListItem
                      title="Process Automation"
                      href="/use-cases/automation"
                    >
                      Streamline repetitive tasks and workflows with intelligent automation.
                    </ListItem>
                    <ListItem
                      title="Data Analytics"
                      href="/use-cases/analytics"
                    >
                      Transform raw data into actionable insights with AI-powered analytics.
                    </ListItem>
                    <ListItem
                      title="Customer Service"
                      href="/use-cases/customer-service"
                    >
                      Deliver exceptional customer experiences with AI-powered support.
                    </ListItem>
                    <ListItem
                      title="Predictive Modeling"
                      href="/use-cases/predictive-modeling"
                    >
                      Build accurate predictive models for business forecasting.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-gray-900 bg-white px-6 py-3 rounded-md hover:bg-gray-50 transition-colors")}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-gray-900 bg-white px-6 py-3 rounded-md hover:bg-gray-50 transition-colors")}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Software
                </div>
                <Link
                  href="/software/ai-platform"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  AI Platform
                </Link>
              </div>
              
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Use Cases
                </div>
                <Link
                  href="/use-cases/automation"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Process Automation
                </Link>
                <Link
                  href="/use-cases/analytics"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Data Analytics
                </Link>
                <Link
                  href="/use-cases/customer-service"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Customer Service
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
                <Link
                  href="/contact"
                  className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Contact
                </Link>
              </div>

              <div className="pt-4 space-y-2">
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Login
                </Link>
                <Link
                  href="/book-demo"
                  className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Book Demo
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
