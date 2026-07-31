"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string
  height?: number | string
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  index?: number
}

const radiusMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
}

export function Skeleton({
  width = "100%",
  height = "100%",
  radius = "lg",
  index = 0,
  className,
  style,
  ...props
}: SkeletonProps) {
  const animationDelay = `${1000 + 100 * index}ms`

  const dimensionStyles: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    animationDelay,
    ...style,
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-zinc-200 dark:bg-zinc-800 animate-pulse",
        radiusMap[radius],
        className
      )}
      style={dimensionStyles}
      {...props}
    />
  )
}

Skeleton.displayName = "Skeleton"