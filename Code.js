var s = SpreadsheetApp.getActive();

function onOpen(e) {
  var menuItems = [
    {name: 'Convert Taobao Links', functionName: 'convert'},
    {name: 'Retrieve details from Taobao ', functionName: 'scrapeFromCell'},
    {name: 'Scrape an item ', functionName: 'showLinkDialogScraper'},
    {name: 'Columns settings ', functionName: 'showColumnsSettings'}
  ];
  s.addMenu('TaoBao', menuItems);
}