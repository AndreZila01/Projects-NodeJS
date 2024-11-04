const { Jimp } = require('jimp');//npm install jimp jimp@0.22.10
let fs = require('fs');

let content = "© Andrezila1"

async function load() {

    // if (!fs.existsSync("./MarcaHelpH.png" || "./MarcaHelpV.png")) {
    //     if (!fs.existsSync("./FicheirosS"))
    //         fs.mkdirSync("./FicheirosS");
    //     if (!fs.existsSync("./FicheirosC"))
    //         fs.mkdirSync("./FicheirosC");

    //     await Jimp.read('./MarcaHelpH.png').then(async (MarcaH) => {
    //         await Jimp.read('./MarcaHelpV.png').then(async (MarcaV) => {
    //             fs.readdir('./FicheirosS', async (err, data) => {
    //                 let count = 0;
    //                 data.forEach(async file => {
    //                     await Jimp.read(`./FicheirosS/${file}`).then(async (fir_img) => {
    //                         if (fir_img.height < fir_img.width)
    //                             fir_img.blit(MarcaH, 0, 0);
    //                         else
    //                             fir_img.blit(MarcaV, 0, 0);


    //                         fir_img.write(`./FicheirosC/${count++}.JPG`);
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // }
    // else
    //     console.log("Falta o ficheiro de marca de água! Por favor ... crie a sua marca de agua");

    if (!fs.existsSync("./FicheirosS"))
        fs.mkdirSync("./FicheirosS");
    if (!fs.existsSync("./FicheirosC"))
        fs.mkdirSync("./FicheirosC");

    await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(async (font) => {
        fs.readdir('./FicheirosS', async (err, data) => {
            let count = 0;
            data.forEach(async file => {
                if (file.toLowerCase().includes(".jpg") || file.toLowerCase().includes(".jpeg") || file.toLowerCase().includes(".png") || file.toLowerCase().includes(".bmp") || file.toLowerCase().includes(".tiff") || file.toLowerCase().includes(".webp") || file.toLowerCase().includes(".svg"))
                    await Jimp.read(`./FicheirosS/${file}`).then(async (fir_img) => {

                        //fir_img.blur(15);
                        fir_img.print(font, 75, (fir_img.bitmap.height - 200), content);
                        if (fir_img.bitmap.height > fir_img.bitmap.width)
                            await fir_img.rotate(-90);

                        await new Promise(resolve => setTimeout(resolve, 1500));
                        await fir_img.write(`./FicheirosC/${count++}.JPG`);
                    });
            });
        });
    });
}

load();
