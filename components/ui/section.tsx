import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: "white" | "light" | "navy" | "dark" | "gradient"
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    light: "bg-neutral-50",
    navy: "bg-navy-deep text-white",
    dark: "bg-navy-midnight text-white",
    gradient: "gradient-navy-blue text-white",
  }

  return (
    <section
      id={id}
      className={cn("section-spacing", bgClasses[background], className)}
    >
      <div className={cn("container-premium", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string
  title: string | ReactNode
  description?: string | ReactNode
  className?: string
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {label && (
        <div className="text-caption text-gold mb-4 font-semibold">
          {label}
        </div>
      )}
      <h2 className="h2 mb-6">{title}</h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
