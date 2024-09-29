const fs = require("fs").promises;

async function readFile(file) {
    try {
        const result = await fs.readFile(file, "utf-8");
        console.log(`Hasil function readFile: ${result} \n`);
        return result;
    } catch (error) {
        console.error('Error occured: ', error);
    }
}

async function writeFile(file) {
    try {
        const result = await fs.writeFile(file, "text baru");
        console.log(`${file} sudah di tulis ulang`)
        return result;
    } catch (error) {
        console.error('Error occured: ', error);
    }
}

module.exports = {
    readFile,
    writeFile
}