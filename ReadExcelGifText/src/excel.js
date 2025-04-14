var excel = require('excel4node');

function WriteExcel(path, time) {
  let FileExcel = new excel.Workbook();

  var worksheet = FileExcel.addWorksheet('GIF');

  // Create a reusable style
  var styleTitle = FileExcel.createStyle({
    font: {
      color: '#000000',
      size: 12
    }
  });

  worksheet.cell(2, 3).string("Path on computer").style(styleTitle);
  worksheet.cell(2, 4).string("Path of URL (Opctional)").style(styleTitle);
  worksheet.cell(2, 5).string("Time of Loading").style(styleTitle);

  for (let i = 0; i < path.length; i++) {
    if (i[index] !== '') {
      if (path[i].includes("http"))
        worksheet.cell(i + 3, 4).string(path[i]);
      else
        worksheet.cell(i + 3, 3).string(path[i]);
      worksheet.cell(i + 3, 5).string("" + time[i]);
    }
  }
  FileExcel.write('./src/Images/Output.xlsx');
}

module.exports = { WriteExcel };