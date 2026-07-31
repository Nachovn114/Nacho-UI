import { Navbar } from "@/components/navbar"
import { ComponentShowcase } from "@/components/component-showcase"
import { ComponentsSidebar } from "@/components/components-sidebar"

export const metadata = {
  title: "Componentes - Nacho UI",
  description: "Biblioteca de componentes de Nacho UI",
}

export default function ComponentsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans antialiased">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto flex gap-8">
          <ComponentsSidebar />

          <div className="flex-1 min-w-0">
            <div className="mb-10">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-2">
                Biblioteca de Componentes
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-lg leading-relaxed">
                Explora y prueba todos los componentes disponibles. Cada uno est&aacute; optimizado para accesibilidad, rendimiento y personalización.
              </p>
            </div>

            <ComponentShowcase />
          </div>
        </div>
      </main>
    </div>
  )
}