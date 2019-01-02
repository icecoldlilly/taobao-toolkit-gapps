function getCols() {
  return {
    name : (PropertiesService.getScriptProperties().getProperty('columns.name') || "A"),
    link : (PropertiesService.getScriptProperties().getProperty('columns.link') || "F"),
    pic : (PropertiesService.getScriptProperties().getProperty('columns.picture') || "G"),
    price : (PropertiesService.getScriptProperties().getProperty('columns.price') || "D"),
    promoPrice : (PropertiesService.getScriptProperties().getProperty('columns.promo.price') || "C"),
    cat :  (PropertiesService.getScriptProperties().getProperty('columns.category') || "H"),
    subCat :  (PropertiesService.getScriptProperties().getProperty('columns.subcategory') || "I"),
    brand :  (PropertiesService.getScriptProperties().getProperty('columns.brand') || "J")
  };
};

function setCols(nameColumn, linkColumn, picColumn, priceColumn, promoPriceColumn, catColumn, subCatColumn, brandColumn){
  PropertiesService.getScriptProperties().setProperty('columns.name', nameColumn);
  PropertiesService.getScriptProperties().setProperty('columns.link', linkColumn);
  PropertiesService.getScriptProperties().setProperty('columns.picture', picColumn);
  PropertiesService.getScriptProperties().setProperty('columns.price', priceColumn);
  PropertiesService.getScriptProperties().setProperty('columns.promo.price', promoPriceColumn);
  PropertiesService.getScriptProperties().setProperty('columns.category', catColumn);
  PropertiesService.getScriptProperties().setProperty('columns.subcategory', subCatColumn);
  PropertiesService.getScriptProperties().getProperty('columns.brand', brandColumn)
}
