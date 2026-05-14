const fs = require('fs');

const files = [
  'src/components/ResumeScan.tsx',
  'src/components/GithubScan.tsx',
  'src/components/PortfolioScan.tsx',
  'src/components/FinalEvaluation.tsx',
  'src/components/ScoreReveal.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/analyzeWithClaude/g, 'analyzeWithGemini');
  c = c.replace(/claude/g, 'gemini');
  c = c.replace(/Anthropic API Key required for real AI analysis/g, 'Google Gemini API Key required for real AI analysis');
  c = c.replace(/Anthropic API Key/g, 'Google Gemini API Key');
  c = c.replace(/Anthropic/g, 'Gemini');
  c = c.replace(/sk-ant-api03-\.\.\./g, 'AIzaSy...');
  fs.writeFileSync(f, c);
});
console.log('Gemini replace done');
