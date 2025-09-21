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
                  <div className="w-[600px] p-6 bg-white rounded-lg shadow-lg border">
                    <div className="space-y-4">
                              {/* Featured Case Study */}
                              <NavigationMenuLink asChild>
                                <Link
                                  className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                                  href="/software/file-management"
                                >
                                  <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                        <span className="text-blue-600 font-bold text-lg">📁</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                      File Management System
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                      Advanced file organization and management system with AI-powered categorization, search, and collaboration features. Streamline your document workflow.
                                    </p>
                                    <div className="mt-2 flex items-center text-xs text-blue-600 font-medium">
                                      Learn More →
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>

                      {/* Other Options */}
                      <div className="grid grid-cols-2 gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            href="/software/analytics"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                  <span className="text-green-600 font-bold text-sm">📊</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                Analytics Suite
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                Advanced data analytics and insights platform.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            href="/software/automation"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                  <span className="text-orange-600 font-bold text-sm">⚡</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                Automation Engine
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                Intelligent workflow automation tools.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            href="/software/integration"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                  <span className="text-purple-600 font-bold text-sm">🔗</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                Integration Hub
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                Seamless third-party integrations.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <div className="group flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                <span className="text-gray-600 font-bold text-sm">🔒</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-500">
                              Security Suite
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
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
                <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 bg-white px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6 bg-white rounded-lg shadow-lg border">
                    <div className="space-y-4">
                      {/* Featured Case Study */}
                      <NavigationMenuLink asChild>
                        <Link
                          className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                          href="/industries/healthcare"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center">
                              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-emerald-600 font-bold text-lg">🏥</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                              Healthcare Solutions
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              AI solutions for medical diagnosis and patient care to improve healthcare outcomes. Revolutionize healthcare with intelligent automation.
                            </p>
                            <div className="mt-2 flex items-center text-xs text-emerald-600 font-medium">
                              Learn More →
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>

                      {/* Other Options */}
                      <div className="grid grid-cols-2 gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            href="/industries/finance"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                  <span className="text-blue-600 font-bold text-sm">💰</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                Financial Services
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                Risk assessment and fraud detection systems.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            href="/industries/manufacturing"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                  <span className="text-amber-600 font-bold text-sm">🏭</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                                Manufacturing
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                Predictive maintenance and quality control.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            href="/industries/retail"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                  <span className="text-pink-600 font-bold text-sm">🛍️</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                                Retail & E-commerce
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                Customer insights and inventory optimization.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <div className="group flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                <span className="text-gray-600 font-bold text-sm">🚀</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-500">
                              Technology
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              Coming Soon
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                          href="/software/file-management"
                          className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          File Management System
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
