import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: "default" | "muted" | "card" | "primary" | "accent"
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "default",
}: SectionProps) {
  const bgClasses = {
    default: "bg-background text-foreground",
    muted: "bg-muted text-foreground",
    card: "bg-card text-card-foreground",
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
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
        <div className="text-caption text-secondary font-semibold mb-4">
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
