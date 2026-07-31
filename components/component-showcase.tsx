"use client"

import * as React from "react"
import { Loader2, Mail, Search, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { StatusDot } from "@/components/ui/status-dot"
import { CopyButton } from "@/components/copy-button"
import { CodeBlock } from "@/components/code-block"

const buttonVariants = ["default", "secondary", "destructive", "outline", "ghost"] as const

const buttonCode = `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`

const badgeCode = `<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`

const inputCode = `<Input placeholder="Tu nombre" />
<Input type="email" placeholder="tu@email.com" />
<Input type="password" placeholder="••••••••" />`

const skeletonCode = `<Skeleton width={200} height={20} />
<Skeleton width={40} height={40} radius="full" />`

const statusDotCode = `<StatusDot variant="success" label="Online" isPulsing />
<StatusDot variant="warning" label="Ausente" />
<StatusDot variant="error" label="Desconectado" />`

export function ComponentShowcase() {
  const [loading, setLoading] = React.useState(false)

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white/50 dark:bg-zinc-900/40 p-6 backdrop-blur-sm">
      <Tabs defaultValue="buttons">
        <TabsList className="bg-zinc-100 dark:bg-zinc-800/60 p-1 rounded-lg">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="astryx">Astryx</TabsTrigger>
        </TabsList>

        <TabsContent value="buttons" className="mt-5 space-y-6">
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Variantes</span>
            <div className="flex flex-wrap items-center gap-2">
              {buttonVariants.map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Tamaños</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Icono"><Search className="h-4 w-4" /></Button>
            </div>
          </div>
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Estado de carga</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Cargando...
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Procesando
              </Button>
              <Button variant="secondary" onClick={handleLoadingClick}>
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Guardando..." : "Click para cargar"}
              </Button>
            </div>
          </div>
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Código</span>
            <CodeBlock code={buttonCode} />
          </div>
        </TabsContent>

        <TabsContent value="badges" className="mt-5 space-y-6">
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Variantes</span>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Con contenido</span>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Activo
              </Badge>
              <Badge variant="secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Pendiente
              </Badge>
              <Badge variant="destructive">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Error
              </Badge>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">v0.1</Badge>
            </div>
          </div>
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Código</span>
            <CodeBlock code={badgeCode} />
          </div>
        </TabsContent>

        <TabsContent value="inputs" className="mt-5 space-y-6">
          <div className="space-y-4 max-w-sm">
            <div className="space-y-1.5">
              <label className="text-left font-medium text-xs text-zinc-700 dark:text-zinc-300 block">Nombre</label>
              <Input placeholder="Tu nombre" />
            </div>
            <div className="space-y-1.5">
              <label className="text-left font-medium text-xs text-zinc-700 dark:text-zinc-300 block">Email</label>
              <Input type="email" placeholder="tu@email.com" />
            </div>
            <div className="space-y-1.5">
              <label className="text-left font-medium text-xs text-red-500 dark:text-red-400 block">Contraseña</label>
              <Input type="password" placeholder="••••••••" aria-invalid="true" />
              <p className="text-xs text-red-500 dark:text-red-400">La contraseña debe tener al menos 8 caracteres.</p>
            </div>
          </div>
          <div className="space-y-1.5 max-w-sm">
            <label className="text-left font-medium text-xs text-zinc-700 dark:text-zinc-300 block">Buscar</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                <Input placeholder="Buscar componentes..." className="pl-8" />
              </div>
              <Button>Buscar</Button>
            </div>
          </div>
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Código</span>
            <CodeBlock code={inputCode} />
          </div>
        </TabsContent>

        <TabsContent value="cards" className="mt-5">
          <Card className="max-w-sm border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
              <Avatar className="h-11 w-11 border border-zinc-200 dark:border-zinc-800">
                <AvatarImage src="https://github.com/Nachovn114.png" alt="Nacho" />
                <AvatarFallback className="font-medium text-xs">N</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-sm font-medium">Ignacio</CardTitle>
                  <Badge variant="outline" className="text-[10px] h-4 px-1.5 py-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Online
                  </Badge>
                </div>
                <CardDescription className="text-xs">Lead UI Engineer @ Nacho UI</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Construyendo componentes de UI minimalistas, accesibles y de alto rendimiento.
              </p>
              <div className="flex items-center gap-2">
                <Button size="sm" className="flex-1">
                  <User className="h-3.5 w-3.5" />
                  Perfil
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Mail className="h-3.5 w-3.5" />
                  Contacto
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="astryx" className="mt-5 space-y-6">
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Skeleton</span>
            <div className="space-y-3 max-w-sm">
              <div className="flex items-center gap-3">
                <Skeleton width={40} height={40} radius="full" index={0} />
                <div className="flex-1 space-y-2">
                  <Skeleton height={14} radius="sm" index={1} />
                  <Skeleton height={12} radius="sm" index={2} width="75%" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton height={100} radius="lg" index={3} />
                <Skeleton height={14} radius="sm" index={4} width="60%" />
                <Skeleton height={14} radius="sm" index={5} width="40%" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">StatusDot</span>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <StatusDot variant="success" label="Online" isPulsing />
                  <span>Online</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <StatusDot variant="warning" label="Ausente" />
                  <span>Ausente</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <StatusDot variant="error" label="Desconectado" />
                  <span>Desconectado</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <StatusDot variant="accent" label="Mantenimiento" isPulsing />
                  <span>Mantenimiento</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <StatusDot variant="neutral" label="Inactivo" />
                  <span>Inactivo</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 max-w-xs">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="font-medium text-xs">N</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-xs font-medium">Ignacio</p>
                  <div className="flex items-center gap-1.5">
                    <StatusDot variant="success" label="Conectado" isPulsing />
                    <span className="text-[11px] text-zinc-500">Conectado ahora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-1">
            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mb-4">
              Componentes inspirados en el design system Astryx de Meta, adaptados a Tailwind CSS v4.
            </p>
          </div>
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Código Skeleton</span>
            <CodeBlock code={skeletonCode} />
          </div>
          <div>
            <span className="text-left font-medium text-xs text-zinc-500 dark:text-zinc-400 mb-3 block">Código StatusDot</span>
            <CodeBlock code={statusDotCode} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}