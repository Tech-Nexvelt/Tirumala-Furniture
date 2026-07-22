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
      {/* Sleek Minimal Luxury Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-xl border-b border-[#EFEFEA] py-3.5 shadow-sm"
            : "bg-[#FAFAF8]/80 backdrop-blur-md border-b border-[#EFEFEA]/60 py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Logo showTagline={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
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
                        isActive ? "text-[#C19A6B] font-bold" : "text-[#111827] hover:text-[#C19A6B]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          showDropdown ? "rotate-180 text-[#C19A6B]" : ""
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
                    isActive ? "text-[#C19A6B] font-bold" : "text-[#111827] hover:text-[#C19A6B]"
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
              className="p-2 text-[#111827] hover:text-[#C19A6B] transition-colors"
              title="Search Catalog"
              aria-label="Search catalog"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            <Link
              href="/contact"
              className="px-4.5 py-2.5 rounded-xl text-xs font-semibold tracking-wider text-[#111827] border border-[#E5E7EB] hover:border-[#C19A6B] hover:bg-[#FFFFFF] transition-all uppercase"
            >
              Book Visit
            </Link>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-[#00D9D9] hover:bg-[#00B8B8] text-[#111827] font-bold text-xs shadow-gold hover:scale-105 transition-all uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" /> Request Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-[#00D9D9] text-[#111827] font-bold text-xs uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#111827] hover:text-[#C19A6B]"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FAFAF8] border-b border-[#EFEFEA] px-6 py-6 space-y-4 animate-fade-in text-[#111827]">
            <div className="flex flex-col space-y-3 pb-4 border-b border-[#EFEFEA]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-sm font-semibold uppercase tracking-wider text-[#111827] hover:text-[#C19A6B]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl border border-[#E5E7EB] text-center font-bold text-xs uppercase tracking-wider text-[#111827] block bg-white"
              >
                Book Showroom Consultation
              </Link>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-[#00D9D9] text-[#111827] font-bold text-xs uppercase tracking-wider text-center block shadow-sm"
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
