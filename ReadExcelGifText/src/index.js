const fs = require('fs');
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
    const prompt = require("prompt-sync")();
    
    if (data == 'Url of Gif or Path \n')
        while (true)
            if (prompt("Did you wrote something on Gif.txt? If yes, write [y]es or [n]o").toLowerCase() == "y")
                return await fs.readFileSync("./src/Images/Gif.txt", "utf8");

    return data;
}

async function start() {
    await CheckFile();
    var readFile = await ReadFile();
    let i = readFile.split("\n");
    let t = [];

    for (let index = 0; index < (readFile.split("\n").length ); index++) {
        if(i[index]!=='')
        t.push(await program.CreateGif(i[index], "test" + index));
    }
    const excel = require('../src/excel.js');
    await excel.WriteExcel(i, t);

    console.log("Done!");
}

start();