import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Ejemplos - Nacho UI",
  description: "Ejemplos de uso de Nacho UI",
}

const examples = [
  {
    title: "Dashboard",
    description: "Panel de control con métricas y gráficos",
    status: "Disponible",
    href: "#",
  },
  {
    title: "Página de Login",
    description: "Formulario de autenticación completo",
    status: "Disponible",
    href: "#",
  },
  {
    title: "Perfil de Usuario",
    description: "Página de perfil con avatar y estadísticas",
    status: "Disponible",
    href: "#",
  },
  {
    title: "E-commerce",
    description: "Listado de productos y carrito",
    status: "Próximamente",
    href: "#",
  },
]

export default function ExamplesPage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans antialiased">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3">
              Ejemplos
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Plantillas y ejemplos completos para empezar rápido
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {examples.map((example) => (
              <Card
                key={example.title}
                className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">{example.title}</CardTitle>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        example.status === "Disponible"
                          ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      {example.status}
                    </span>
                  </div>
                  <CardDescription className="text-xs">{example.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    disabled={example.status !== "Disponible"}
                  >
                    Ver ejemplo
                  </Button>
                </CardContent>
              </Card>
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