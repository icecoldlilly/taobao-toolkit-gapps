


function scrapeLink(tbLink){
    var options = {
      'method' : 'get',
      'contentType': 'text/html;charset=gbk',
      'headers': { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                  'Origin': 'htips://www.google.com'
                 }
    };
    var cleanLink = convertURL(tbLink)
    SpreadsheetApp.getActiveSpreadsheet().toast('Fetching '+tbLink);
    const content = UrlFetchApp.fetch(tbLink, options).getContentText("GBK");
    SpreadsheetApp.getActiveSpreadsheet().toast('Scraping the information...');
    const $ = Cheerio.load(content);
    var item = {
      'title': LanguageApp.translate($('.tb-main-title').text().trim(), 'zh-CN', 'en'),
      'price': $('.tb-rmb-num').text().trim(),
      'promoPrice': $('#J_PromoPriceNum').text(),
      'store': {
        'name': $('.tb-shop-name').find('a').attr('title'),
        'link': $('.tb-shop-name').find('a').attr('href')
      },
      'link': cleanLink,
      'rating': $('.tb-rate-counter').text().trim(),
      'pic': "https:"+$('#J_ImgBooth').attr('src')
    };
    return item
}

function showError() {
  var ui = SpreadsheetApp.getUi(); // Same variations.
  var result = ui.alert(
   'Error',
    getCurrentCell().getA1Notation() + ' doesn\'t contain a TaoBao link :(',
    ui.ButtonSet.OK);
}

function scrapeFromCell() {
  var cellValue = getCurrentCell().getValue();

  if (presetCols().name == undefined ){
    SpreadsheetApp.getActiveSpreadsheet().toast('Setting up columns for the first time');
    setCols();
  }
  SpreadsheetApp.getActiveSpreadsheet().toast('Checking if link is valid...');
  if (presetCols().name && isTaobaoURL(cellValue)){
    google.script.run.withSuccessHandler(showCellScraperCinformation).scrapeLink(cellValue);
  } else {
    showError();
  }
}

function showLinkDialogScraper() {
  var html = HtmlService.createHtmlOutputFromFile('LinkDialogScraper')
//      .setWidth(400)
//      .setHeight(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Scrape item from TaoBao');
}

function showCellScraperinformation(info) {
  var ui = SpreadsheetApp.getUi(); // Same variations.
  var result = ui.alert(
     'Please confirm',
    
     ''+JSON.stringify(info)+'\nAre you sure you want to continue?',
      ui.ButtonSet.YES_NO);
  // Process the user's response.
  if (result == ui.Button.YES) {
    // User clicked "Yes".
    fillData(info, getCurrentCell().row())
    ui.alert('Confirmation received.');
  } else {
    // User clicked "No" or X in the title bar.
    ui.alert('Permission denied.');
  }
}