const fs = require("fs").promises;

async function rewrite(file) {
    try {
        await fs.writeFile(file, "Hello, now you are currently on Nanda's function!");
        const data = await fs.readFile(file, "utf-8");
        return data;
    } catch (error) {
        console.log("Erorr Page 404 Not Found: ", erorr);
        throw error;
    }
}

module.exports = {
    rewrite
};