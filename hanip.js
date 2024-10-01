const fs = require("fs").promises;

async function rewrite(file) {
    try {
        await fs.writeFile(file, "Kamu memasuki tugas hanip");
        const result = await fs.readFile(file, "utf-8")
        return result;
    } catch (error) {
        console.error('Error occured: ', error);
    }
}

module.exports = {
    rewrite
}