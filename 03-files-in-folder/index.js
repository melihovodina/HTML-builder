const fs = require('fs');
const path = require('path');
const { stdout } = process;
const dir = path.join(__dirname, 'secret-folder');
fs.readdir(dir, {withFileTypes:true}, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        fs.stat(path.join(dir, file.name,), (err,stats) => {
            if (stats.isFile()) {
                const dot = file.name.lastIndexOf('.');
                const name = file.name.slice(0, dot);
                const ext = path.extname(file.name).slice(1);
                const size = stats.size;
                stdout.write(`${name} - ${ext} - ${size}\n`);
            }    
        });
    });
});
