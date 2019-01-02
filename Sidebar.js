/**
 * Creates a new UI element from `Sidebar.html` and shows it.
 */
function showColumnsSettings() {
  /**
   * Create UI from `Sidebar.html` and set the sidebar title.
   */
  var ui = HtmlService.createHtmlOutputFromFile('Columns')
    .setTitle('Columns Settings');
  /**
   * Show UI as part of the application sidebar.
   */
  SpreadsheetApp.getUi()
    .showSidebar(ui);
}
