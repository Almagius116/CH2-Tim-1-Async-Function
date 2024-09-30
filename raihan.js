const fs = require("fs").promises;

async function rewrite(file) {
  try {
    // menambahkan pesan baru ke dalam file
    await fs.appendFile(file, "\nHello from Raihan's rewrite function!");

    // membaca file yang telah diupdate
    const data = await fs.readFile(file, "utf-8");
    return `Updated content from raihan's rewrite function: \n${data}`;
  } catch (error) {
    throw new Error(`Error in yourName's function: ${error.message}`);
  }
}

module.exports = { rewrite };
