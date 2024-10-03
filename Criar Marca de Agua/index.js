const { Jimp } = require('jimp');
let fs = require('fs');

async function load() {

    if (!fs.existsSync("./MarcaHelpH.png" || "./MarcaHelpV.png")) {
        if (!fs.existsSync("./FicheirosS"))
            fs.mkdirSync("./FicheirosS");
        if (!fs.existsSync("./FicheirosC"))
            fs.mkdirSync("./FicheirosC");

        await Jimp.read('./MarcaHelpH.png').then(async (MarcaH) => {
            await Jimp.read('./MarcaHelpV.png').then(async (MarcaV) => {
                fs.readdir('./FicheirosS', async (err, data) => {
                    let count = 0;
                    data.forEach(async file => {
                        await Jimp.read(`./FicheirosS/${file}`).then(async (fir_img) => {
                            if (fir_img.height < fir_img.width)
                                fir_img.blit(MarcaH, 0, 0);
                            else
                                fir_img.blit(MarcaV, 0, 0);


                            fir_img.write(`./FicheirosC/${count++}.JPG`);
                        });
                    });
                });
            });
        });
    }
    else
        console.log("Falta o ficheiro de marca de água! Por favor ... crie a sua marca de agua");
}

load();