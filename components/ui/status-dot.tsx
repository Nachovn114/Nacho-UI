"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type StatusDotVariant = "success" | "warning" | "error" | "accent" | "neutral"

interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: StatusDotVariant
  label: string
  isPulsing?: boolean
}

const variantStyles = {
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  accent: "bg-blue-500",
  neutral: "bg-zinc-400 dark:bg-zinc-500",
}

export function StatusDot({
  variant,
  label,
  isPulsing = false,
  className,
  ...props
}: StatusDotProps) {
  return (
    <span
      role="img"
      aria-label={label}
      className={cn(
        "inline-block flex-shrink-0 w-2 h-2 rounded-full",
        variantStyles[variant],
        isPulsing && "animate-pulse",
        className
      )}
      {...props}
    />
  )
}

StatusDot.displayName = "StatusDot"