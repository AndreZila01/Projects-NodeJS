const TextOnGif = require('./text.js');

async function CreateGif(PathGif, Nome) {
    try {
        (async function () {
            let data = new Date();
            //console.log(v);
            const gif = new TextOnGif({
                file_path: PathGif,
            });

            gif.font_color = 'white';
            gif.font_size = `${25 + (1.5 * Nome.length)}px`;
            gif.stroke_color = 'black';
            gif.stroke_width = 5;

            const buffer = await gif.textOnGif({
                text: Nome,
                get_as_buffer: true,
                write_path: "gif-with-text.gif"
            });

            res.setHeader('Content-Type', 'image/gif');
            res.send(buffer);
        })();
    } catch (error) {
        console.error('Error creating and sending GIF:', error.message);
        res.status(500).send('Error creating and sending GIF');
    }
}

module.exports = { CreateGif };