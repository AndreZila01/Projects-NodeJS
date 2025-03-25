const fs = require('fs');
const excel = require('../src/excel.js');
const program = require('../src/program.js');

async function CheckFile() {
    try {
        if (!fs.existsSync("./src/Images/")) {
            fs.mkdirSync("./src/Images/");
            fs.writeFileSync("./src/Images/Gif.txt", "Url of Gif or Path \n");
            return "";
        }
        else if (!fs.existsSync("./src/Images/Gif.txt")) {
            fs.writeFileSync("./src/Images/Gif.txt", "Url of Gif or Path \n");
            return "";
        }
    } catch {

    }
}

async function ReadFile() {
    var data = await fs.readFileSync("./src/Images/Gif.txt", "utf8");

    if (data == "")
        while (true) {
            var option = prompt("Did you wrote something on Gif.txt? If yes, write [y]es or [n]o");
            if (option.toLowerCase() == "y")
                return await fs.readFileSync("./src/Images/Gif.txt", "utf8");

        }


    return data;
}

async function start() {
    await CheckFile();
    var readFile = await ReadFile();
    // await 
}

start();