"use client"

import * as React from "react"
import { CopyButton } from "@/components/copy-button"
import { cn } from "@/lib/utils"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "tsx", className, ...props }: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-lg bg-zinc-900 dark:bg-zinc-950 border border-zinc-800", className)} {...props}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800">
        <span className="text-[11px] text-zinc-400 font-mono">{language}</span>
        <CopyButton code={code} className="relative top-0 right-0" />
      </div>
      <pre className="overflow-x-auto p-3 text-[13px] font-mono text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  )
}