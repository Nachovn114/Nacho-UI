import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Documentación - Nacho UI",
  description: "Documentación de Nacho UI Design System",
}

const docsSections = [
  {
    title: "Inicio rápido",
    description: "Instalación y configuración inicial",
    items: ["Instalación", "Configuración", "Primeros pasos"],
  },
  {
    title: "Componentes",
    description: "Guías de uso para cada componente",
    items: ["Buttons", "Badges", "Inputs", "Cards", "Skeleton", "StatusDot"],
  },
  {
    title: "Temas",
    description: "Personalización visual",
    items: ["Modo oscuro", "Colores", "Tipografía", "Espaciado"],
  },
]

export default function DocsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans antialiased">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3">
              Documentación
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Todo lo que necesitas para construir con Nacho UI
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {docsSections.map((section) => (
              <div
                key={section.title}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40"
              >
                <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 mb-1">
                  {section.title}
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  {section.description}
                </p>
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li key={item}>
                      <span className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 cursor-pointer transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/components">
              <Button>Ver Componentes</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}