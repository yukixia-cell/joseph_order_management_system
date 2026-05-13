const ecommerce = require('./josephyeow_webapi.js')

console.log("Initializing Order Online Process!");

ecommerce.addtoOrder("T30", "FireWood Setter", 3, 7.5);
ecommerce.addtoOrder("R369", "Table Ice Diamond", 3, 9.60);
ecommerce.addtoOrder("T95L", "Beef Angus Sirloin", 2, 10.30);
ecommerce.addtoOrder("T443", "Fish Red Snapper", 3, 7.30);
ecommerce.addtoOrder("J90", "kinki rockfish", 4, 8.90);
ecommerce.addtoOrder("A78", "Atlantic Salmon", 4, 8.90);
ecommerce.addtoOrder("R670", "Yoyo Super", 2, 12.00);

ecommerce.displayOrderTables();


ecommerce.updateOrder(4, "kinki rockfish", 5, 6.20);
ecommerce.updateOrder(5, "Atlantic Salmon", 5, 7.68);

console.log("Updated Tables:");

ecommerce.displayOrderTables();


ecommerce.deleteOrder(6);

ecommerce.displayOrderTables();

console.log("|----Receipt----|");
console.log("|----E-Commerce Checkout----|");
console.log("");
console.log('Total value: $' + ecommerce.calculateTotalValue());

console.log("");
console.log("Checkout Process after Payment:");
console.log("");

console.log("Total process checkout: $" + ecommerce.calculateOrderProcess());