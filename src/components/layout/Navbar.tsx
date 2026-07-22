"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Sparkles, Search } from "lucide-react";
import CollectionsDropdown from "./CollectionsDropdown";
import QuickQuoteDrawer from "./QuickQuoteDrawer";
import CommandMenu from "./CommandMenu";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections", hasDropdown: true },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Sleek Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#C59D5F]/25 py-3 shadow-2xl"
            : "bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[#1C1C1C] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Logo variant="gold" showTagline={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors ${
                        isActive ? "text-[#C59D5F] font-bold" : "text-[#E8E6E1]/90 hover:text-[#C59D5F]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          showDropdown ? "rotate-180 text-[#C59D5F]" : ""
                        }`}
                      />
                    </button>
                    {showDropdown && (
                      <CollectionsDropdown onClose={() => setShowDropdown(false)} />
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? "text-[#C59D5F] font-bold" : "text-[#E8E6E1]/90 hover:text-[#C59D5F]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#E8E6E1] hover:text-[#C59D5F] transition-colors"
              title="Search Catalog"
              aria-label="Search catalog"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold tracking-wider text-[#E8E6E1] border border-[#C59D5F]/40 hover:border-[#C59D5F] hover:bg-[#1C1C1C] transition-all uppercase"
            >
              Book Visit
            </Link>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#DFB978] via-[#C59D5F] to-[#9A7336] text-[#0D0D0D] font-bold text-xs shadow-gold hover:scale-105 transition-all uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" /> Request Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-[#C59D5F] text-[#0D0D0D] font-bold text-xs uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#E8E6E1] hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0D0D0D] border-b border-[#1C1C1C] px-6 py-6 space-y-4 animate-fade-in text-[#E8E6E1]">
            <div className="flex flex-col space-y-3 pb-4 border-b border-[#1C1C1C]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-sm font-semibold uppercase tracking-wider text-gray-200 hover:text-[#C59D5F]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl border border-[#C59D5F]/40 text-center font-bold text-xs uppercase tracking-wider text-[#E8E6E1] block"
              >
                Book Showroom Consultation
              </Link>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-[#C59D5F] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider text-center block shadow-md"
              >
                Request Custom Quotation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Drawers and Modals */}
      <QuickQuoteDrawer isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <CommandMenu isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
