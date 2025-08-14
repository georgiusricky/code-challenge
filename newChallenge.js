const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter challenge folder name: ', (folderName) => {
  const folderPath = path.join(process.cwd(), folderName);

  if (fs.existsSync(folderPath)) {
    console.log(`❌ Folder "${folderName}" already exists.`);
    rl.close();
    return;
  }

  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFileSync(path.join(folderPath, 'instruction.md'), '# Title \n\ Instruction \n\ ```bash test```');
  fs.writeFileSync(path.join(folderPath, 'solution.js'), '// Your solution goes here\n');

  console.log(`✅ Folder "${folderName}" created with instruction.md and solution.js`);
  rl.close();
});
