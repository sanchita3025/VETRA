const fs = require('fs');
const files = [
  'src/components/ResumeScan.tsx',
  'src/components/PortfolioScan.tsx',
  'src/components/FinalEvaluation.tsx',
  'src/components/ScoreReveal.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // Remove backslashes before backticks and dollar signs inside template literals
  c = c.replace(/\\`/g, '`');
  c = c.replace(/\\\$/g, '$');
  fs.writeFileSync(f, c);
});
console.log('Cleanup done');
