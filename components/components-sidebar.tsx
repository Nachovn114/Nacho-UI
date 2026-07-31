"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const categories = [
  {
    title: "Primeros Pasos",
    items: [
      { label: "Introducción", href: "/components#introduccion" },
      { label: "Instalación", href: "/components#instalacion" },
    ],
  },
  {
    title: "Elementos Básicos",
    items: [
      { label: "Button", href: "/components#buttons" },
      { label: "Badge", href: "/components#badges" },
      { label: "Input", href: "/components#inputs" },
      { label: "Card", href: "/components#cards" },
    ],
  },
  {
    title: "Avanzados / Astryx",
    items: [
      { label: "Skeleton", href: "/components#astryx" },
      { label: "StatusDot", href: "/components#astryx" },
    ],
  },
]

export function ComponentsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-56 flex-shrink-0">
      <nav className="sticky top-20 space-y-6">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 px-2">
              {category.title}
            </h3>
            <ul className="space-y-0.5">
              {category.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors py-1 px-2 rounded-md",
                      pathname + item.href === item.href && "bg-zinc-100 dark:bg-zinc-800/50 text-zinc-950 dark:text-zinc-50 font-medium"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}