const fs = require('fs');

const filesToType = [
  'src/components/DomainSelection.tsx',
  'src/components/FinalEvaluation.tsx',
  'src/components/GithubScan.tsx',
  'src/components/PortfolioScan.tsx',
  'src/components/ResumeScan.tsx',
  'src/components/ScoreReveal.tsx'
];

filesToType.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/import { VetraState } from '\.\.\/App';/g, "import type { VetraState } from '../App';");
  fs.writeFileSync(f, c);
});

// App.tsx
let appC = fs.readFileSync('src/App.tsx', 'utf8');
appC = appC.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { AnimatePresence } from 'framer-motion';");
fs.writeFileSync('src/App.tsx', appC);

// GithubScan.tsx
let ghC = fs.readFileSync('src/components/GithubScan.tsx', 'utf8');
ghC = ghC.replace("import { Github, AlertTriangle } from 'lucide-react';", "import { GitBranch, AlertTriangle, CheckCircle } from 'lucide-react';");
ghC = ghC.replace(/<Github /g, "<GitBranch ");
fs.writeFileSync('src/components/GithubScan.tsx', ghC);

// ResumeScan.tsx
let rsC = fs.readFileSync('src/components/ResumeScan.tsx', 'utf8');
rsC = rsC.replace("UploadCloud, FileText, CheckCircle", "UploadCloud, CheckCircle");
fs.writeFileSync('src/components/ResumeScan.tsx', rsC);

console.log('Fixed types and imports');
