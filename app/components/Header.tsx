'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleMenuClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent"
            >
              강성지
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-2 text-lg font-medium text-gray-700 transition-all hover:bg-purple-50 hover:text-purple-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white/95 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMenuClick}
                className="block rounded-xl px-3 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
