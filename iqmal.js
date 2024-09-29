const fs = require("fs").promises;

async function rewrite(filePath, content) {
  try {
    // overrinding content in file
    await fs.writeFile(filePath, content);
    // reading file
    const data = await fs.readFile(filePath, "utf-8");
    // wait for fs.readFile, then console.log
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  rewrite,
};
