import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center p-6 sm:p-12 font-sans antialiased">
      {/* Contenedor Principal */}
      <main className="max-w-3xl w-full space-y-8 text-center">

        {/* Header con Badge */}
        <div className="space-y-4 flex flex-col items-center">
          <Badge variant="outline" className="px-3 py-1 text-xs border-zinc-200 dark:border-zinc-800 rounded-full font-medium text-zinc-600 dark:text-zinc-400">
            v0.1.0 • Design System
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Nacho UI
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg max-w-lg font-normal leading-relaxed">
            Componentes minimalistas, accesibles y de alto rendimiento diseñados para aplicaciones web modernas.
          </p>
        </div>

        {/* Galería de Componentes en Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">

          {/* Card 1: Perfil */}
          <Card className="border border-zinc-200/80 dark:border-zinc-800 shadow-none bg-white dark:bg-zinc-900/50">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-3">
              <Avatar className="h-10 w-10 border border-zinc-200 dark:border-zinc-800">
                <AvatarImage src="https://github.com/Nachovn114.png" alt="Nacho" />
                <AvatarFallback className="font-medium text-xs">N</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-sm font-medium">Ignacio</CardTitle>
                <CardDescription className="text-xs text-zinc-500">Creator & Lead UI Engineer</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Diseñado para construir productos digitales con velocidad y precisión usando Next.js y Tailwind CSS.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Interacciones */}
          <Card className="border border-zinc-200/80 dark:border-zinc-800 shadow-none bg-white dark:bg-zinc-900/50 flex flex-col justify-between">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Suscríbete al sistema</CardTitle>
              <CardDescription className="text-xs text-zinc-500">Recibe actualizaciones sobre nuevos componentes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="h-8 text-xs bg-zinc-50/50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus-visible:ring-1 focus-visible:ring-zinc-400"
                />
                <Button size="sm" className="h-8 text-xs font-medium px-4">
                  Unirse
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Acciones Principales */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <Button variant="default" className="font-medium h-9 text-xs">
            Ver Documentación
          </Button>
          <a href="https://github.com/Nachovn114/Nacho-UI" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-zinc-200 dark:border-zinc-800 font-medium h-9 text-xs">
              GitHub Repo
            </Button>
          </a>
        </div>

      </main>
    </div>
  )
}
