const fs = require('fs');

const files = [
  'src/components/FinalEvaluation.tsx',
  'src/components/GithubScan.tsx',
  'src/components/PortfolioScan.tsx',
  'src/components/ResumeScan.tsx',
  'src/components/ScoreReveal.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/\\`/g, '`').replace(/\\\$/g, '$');
  fs.writeFileSync(f, c);
  console.log(f + ' fixed');
});
