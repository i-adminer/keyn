#!/bin/bash

# List of section files to update (excluding about.tsx which is already done)
sections=(
  "components/sections/services-overview.tsx"
  "components/sections/recruitment.tsx"
  "components/sections/recruitment-process.tsx"
  "components/sections/hr-consulting.tsx"
  "components/sections/hr-advisory.tsx"
  "components/sections/cv-career-services.tsx"
  "components/sections/career-services-cta.tsx"
  "components/sections/training.tsx"
  "components/sections/faq.tsx"
  "components/sections/clients.tsx"
  "components/sections/value-strip.tsx"
)

for file in "${sections[@]}"; do
  echo "Processing $file..."
  
  # Add AnimatedSection import after existing imports
  # Check if file already has AnimatedSection import
  if ! grep -q "AnimatedSection" "$file"; then
    # Add import at the end of imports section (before first empty line or const)
    sed -i '' '/^import/!b; /^$/a\
import { AnimatedSection } from "../ui/animated-section";
' "$file" || {
      # Alternative: add after last import
      awk '/^import/ {last=NR} NR==last+1 && !done {print "import { AnimatedSection } from \"../ui/animated-section\";"; done=1} 1' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    }
    
    # Wrap the section element
    sed -i '' 's/return (/return (\n    <AnimatedSection>/' "$file"
    
    # Close the AnimatedSection wrapper before the final closing of the component
    sed -i '' 's/);$/    <\/AnimatedSection>\n  );\n/' "$file"
    
    echo "✓ Updated $file"
  else
    echo "⊘ Skipped $file (already has AnimatedSection)"
  fi
done

echo "Done! All sections wrapped with AnimatedSection"
