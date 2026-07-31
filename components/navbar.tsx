"use client"

import Link from "next/link"
import { GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"

const navLinks = [
  { label: "Componentes", href: "/components" },
  { label: "Documentación", href: "/docs" },
  { label: "Ejemplos", href: "/examples" },
]

export function Navbar() {
  return (
    <header className="bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-semibold text-zinc-950 dark:text-zinc-50">Nacho UI</span>
            <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4 border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400">
              v0.1
            </Badge>
          </Link>

          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <a href="https://github.com/Nachovn114/Nacho-UI" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-zinc-200 dark:border-zinc-800">
                <GitBranch className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}