var excel = require('excel4node');
const xlsx = require('xlsx');

function defaultExcel() {
    let FileExcel = new excel.Workbook();

    var worksheet = FileExcel.addWorksheet('GIF');
    
    // Create a reusable style
    var styleTitle = FileExcel.createStyle({
      font: {
        color: '#000000',
        size: 12
      }
    });

    worksheet.cell(2,3).string("Url Do Gif").style(styleTitle);
    worksheet.cell(2,4).string("Caminho do URL (Opctional)").style(styleTitle);
    worksheet.cell(2,5).string("Tempo de Loading").style(styleTitle);

    FileExcel.write('./src/Images/Output.xlsx');
}

function Readline(){
    const workbook = xlsx.readFile('./src/Images/Output.xlsx');
    const worksheet = workbook.Sheets["GIF"];
    const cellValue = worksheet['C2']; // Get the value of cell A1
}

module.exports = { defaultExcel,Readline };