"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  const isHome = pathname === "/";
  const navBg = isHome
    ? scrolled
      ? "navbar-scrolled"
      : "bg-transparent"
    : "navbar-scrolled";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/logo.svg" alt="FwdGrow" width={160} height={48} />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link transition-colors font-medium ${
                  pathname === l.href
                    ? "text-accent-400 hover:text-accent-400"
                    : "text-white hover:text-accent-400"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            <i className={mobileOpen ? "fas fa-xmark" : "fas fa-bars"} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-primary-900/95 backdrop-blur-md rounded-2xl mt-2 p-6 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-accent-400 font-medium text-lg"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
