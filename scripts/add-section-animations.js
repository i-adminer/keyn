const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../components/sections');
const sections = [
  'services-overview.tsx',
  'recruitment.tsx',
  'recruitment-process.tsx',
  'hr-consulting.tsx',
  'hr-advisory.tsx',
  'cv-career-services.tsx',
  'career-services-cta.tsx',
  'training.tsx',
  'faq.tsx',
  'clients.tsx',
  'value-strip.tsx'
];

sections.forEach(filename => {
  const filePath = path.join(sectionsDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has AnimatedSection
  if (content.includes('AnimatedSection')) {
    console.log(`⊘ Skipped ${filename} (already has AnimatedSection)`);
    return;
  }
  
  // Add import after last import statement
  const lines = content.split('\n');
  let lastImportIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) {
      lastImportIndex = i;
    }
  }
  
  if (lastImportIndex !== -1) {
    lines.splice(lastImportIndex + 1, 0, 'import { AnimatedSection } from "../ui/animated-section";');
  }
  
  content = lines.join('\n');
  
  // Wrap return statement
  content = content.replace(
    /(\s+return\s+\()/,
    '$1\n    <AnimatedSection>'
  );
  
  // Close AnimatedSection before final closing
  content = content.replace(
    /(\s+<\/section>\s+\);\s+})/,
    '    </section>\n    </AnimatedSection>\n  );\n}'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated ${filename}`);
});

console.log('Done! All sections wrapped with AnimatedSection');
