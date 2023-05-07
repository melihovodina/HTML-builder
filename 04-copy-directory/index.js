const fs = require('fs/promises');
const path = require('path');
async function copyDir() {
    await fs.rm(path.join(__dirname, 'files-copy'), {
        force: true,
        recursive: true 
    });
    await fs.mkdir(path.join(__dirname, 'files-copy'));
    const copyedFiles = await fs.readdir(path.join(__dirname, 'files'));
    for(const file of copyedFiles) {
        await fs.copyFile(
            path.join(__dirname, 'files', file),
            path.join(__dirname, 'files-copy', file)
        );
    }
}
copyDir().catch((err) => console.error(err))