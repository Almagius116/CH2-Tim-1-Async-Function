const http = require("http");
const url = require("url");
const fs = require("fs");
const functionTim1 = require('./function.js');
const file = './index.txt';

const server =http.createServer((req,res) => {
    const pathUrl = req.url;

    if(pathUrl === "/"){
        res.end("Tim 1 Async Function");
    } else if(pathUrl === "/read"){
        async function result() {
            try {
                const readFile = await functionTim1.readFile(file);
                res.end(`isi index.txt = ${readFile}`);
            } catch (error) {
                console.log(error)
                res.end(error)
            }
        }
        result()
    } else if(pathUrl === "/write"){
        functionTim1.writeFile(file)
        res.end('index.txt sudah di rewrite');
    }else{
        res.end("404");
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Aplikasi ini berjalan di port 3000');
})
