// discount percentage = (list price - selling price) / (list price *100

var sellingPrice = 199 ;
var listPrice = 799;

var discountPercentage = ((listPrice - sellingPrice) / listPrice * 100);
// .toFixed(0);

console.log("Discount Percentage: " + discountPercentage + "%");

displayPercentageAprox = Math.round(discountPercentage);

console.log("Discount Percentage (approximately): " + displayPercentageAprox + "%");