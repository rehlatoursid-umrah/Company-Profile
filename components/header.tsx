"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">Rehlatours</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="text-foreground hover:text-primary transition">
              Tentang
            </a>
            <a href="#packages" className="text-foreground hover:text-primary transition">
              Paket
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimoni
            </a>
            <a href="#pesantren" className="text-foreground hover:text-primary transition">
              Kemitraan
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Kontak
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <a href="#about" className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition">
              Tentang
            </a>
            <a href="#packages" className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition">
              Paket
            </a>
            <a href="#testimonials" className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition">
              Testimoni
            </a>
            <a href="#pesantren" className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition">
              Kemitraan
            </a>
            <a href="#contact" className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition">
              Kontak
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
