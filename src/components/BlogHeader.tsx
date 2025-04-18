"use client";

import Link from "next/link";
import { useState } from "react";

export default function BlogHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-300">
      <div className="container mx-auto px-4 md:px-0">
        <nav className="flex justify-between items-center py-6">
          <Link href="/">
            <h1 className="text-white font-extrabold text-2xl">LendImmoPME</h1>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link
              href="/sign-in"
              className="text-white/90 hover:text-white text-sm lg:text-base whitespace-nowrap"
            >
              Investir
            </Link>
            <Link
              href="/sign-in"
              className="text-white/90 hover:text-white text-sm lg:text-base whitespace-nowrap"
            >
              Levez des fonds
            </Link>
            <Link
              href="/blog/selection"
              className="text-white/90 hover:text-white text-sm lg:text-base whitespace-nowrap"
            >
              Blog
            </Link>
            <Link
              href="/sign-in"
              className="text-purple-600 bg-white px-4 py-2 rounded-full hover:bg-gray-200 text-sm lg:text-base whitespace-nowrap transition-all"
            >
              Se connecter
            </Link>
            <Link
              href="/sign-up"
              className="text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-400 text-sm lg:text-base whitespace-nowrap transition-all"
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-purple-700 py-4 px-2 flex flex-col gap-4 items-center rounded">
            <Link
              href="/sign-in"
              className="block text-white hover:text-gray-200"
            >
              Investir
            </Link>
            <Link
              href="/sign-in"
              className="block text-white hover:text-gray-200"
            >
              Levez des fonds
            </Link>
            <Link
              href="/blog/selection"
              className="block text-white hover:text-gray-200"
            >
              Blog
            </Link>
            <Link
              href="/sign-in"
              className="text-purple-600 bg-white px-4 py-2 rounded-full hover:bg-gray-200 text-sm lg:text-base whitespace-nowrap transition-all"
            >
              Se connecter
            </Link>
            <Link
              href="/sign-up"
              className="text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-400 text-sm lg:text-base whitespace-nowrap transition-all"
            >
              S&apos;inscrire
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
