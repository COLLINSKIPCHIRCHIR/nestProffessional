"use client"

//import { useTheme } from "next-themes" // NOTE: This import is for Next.js. We'll adjust it.
import { Toaster as SonnerToaster } from "sonner"
import { cn } from "@/lib/utils" // Ensure this path is correct

type ToasterProps = React.ComponentProps<typeof SonnerToaster>

// We need to adjust useTheme for a standard Vite React app.
// If you don't use next-themes, you can remove the theme logic or implement a simple theme context.
// For now, let's simplify it to avoid `next-themes` dependency if not already used.

// Simplified Toaster for Vite (without next-themes)
const Toaster = ({ ...props }: ToasterProps) => {
  // If you have a global theme context (e.g., from your Layout), you can use it here.
  // Otherwise, we'll default to system or light/dark based on browser preference.
  const theme =
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
      : "system" // Fallback for SSR or initial render

  return (
    <SonnerToaster
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: cn(
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg"
          ),
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

// Original shadcn/ui code (if you were using next-themes)
/*
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme: resolvedTheme } = useTheme()

  return (
    <SonnerToaster
      theme={resolvedTheme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
*/
