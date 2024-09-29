const { rewrite } = require('./Aqsa');

const fs = require('fs').promises

async function rizal(file) {
    try {
        //write to file
        await fs.writeFile(file, "Halo ini halaman Rizal Firmansyah");

        const data = await fs.readFile(file, "utf-8");

        return data;
    } catch (error) {
        console.error("Not Found!!!: ", error);
    }
}

module.exports = {
    rewrite
}