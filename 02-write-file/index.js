const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');

fs.writeFile(
    path.join(__dirname, '02-write-file', 'text.txt'),
    '',
    (err) => {
        if (err) throw err;
        console.log('файл был создан');
    }
);

const output = fs.createWriteStream('text.txt')

stdin.on('data', (chunk) => {
    if (chunk.toString() === 'exit') {
      stdout.write('Програма завершилась');
      process.exit();
    }
    output.write(chunk);
  });
stdin.on('error', (error) => console.log('Error', error.message));
