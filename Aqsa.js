const fs = require("fs").promises;

async function rewrite(file) {
    try {
        let result = await fs.writeFile(file, "Halo saya Aqsa Prima Cahya");
        result = await fs.readFile(file, "utf-8")
        return result;
    } catch (error) {
        console.error('Error occured: ', error);
    }
}

module.exports = {
    rewrite
}