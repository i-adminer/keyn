import type { ChildrenProps } from "@/types";
import { ThemeProvider as NextThemes } from "next-themes";

export default function ThemeProvider({ children }: ChildrenProps) {
  return (
    <NextThemes 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      storageKey="keyn-theme"
      disableTransitionOnChange
    >
      {children}
    </NextThemes>
  );
}
