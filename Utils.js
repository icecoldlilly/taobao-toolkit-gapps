function getCurrentCell() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  return sheet.getActiveCell();
}

function getNewestAvailableRow() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();
  var row = 0;
  for (var row=0; row<values.length; row++) {
    if (!values[row].join("")) break;
  }
  return (row+1);
}

function fillData(data, row){
  if (data == null) {
    throw 'arg1 required';
  }
  else if (row == null) {
    row = getNewestAvailableRow()
  }
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log("Recording to row:"+row);
  SpreadsheetApp.getActiveSpreadsheet().toast('Filling up the data...');
  sheet.getRange(getCols().name+row).setValue(data.title);
  sheet.getRange(getCols().price+row).setValue('¥'+data.price);
  sheet.getRange(getCols().promoPrice+row).setValue('¥'+data.promoPrice);
  sheet.getRange(getCols().pic+row).setValue(data.pic);
  sheet.getRange(getCols().link+row).setValue(data.link);
  sheet.getRange(getCols().cat+row).setValue(data.cat);
  sheet.getRange(getCols().subCat+row).setValue(data.subCat);
  sheet.getRange(getCols().brand+row).setValue(data.brand);
}