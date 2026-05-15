# Assignment 1

Order items to call up input Functions your node modules and display output functions in Order Management System node js



| Function | Description| Fields | 
| :---         |     :---:                                |          ---: |
| addtoOrder : function (serialcode, item, quantity, price)  | To add a new orders in a new item        |   serialcode, item, quantity, price| 
|getAllOrders : function () | To retrieve all orders                    |           No Required Fields |
|updateOrder : function (index, item, newQty, newPrice) | To Update the Order with the index of the item with new qty and price | index, item, newQty, newPrice|
|deleteOrder : function (index) | To delete the order with the index of the item from order table | index |
|calculateTotalValue : function () | To calculate the total value price of the items and multiply quantity | No Required Fields | 
| calculateOrderProcess : function ()| To calculate the full total price with shipping charges, and discounted in process order | No required order|
| displayOrderTables : function () | To display the order Tables in order list in the e-commerce cart| no fields |




# Code for Functions:

For addtoorder function with logic:

            addtoOrder: function (serialcode, item, quantity, price) {
                    let newOrder = {
                        serialcode: serialcode,
                        item: item,
                        quantity: quantity,
                        price: price,
                    }
                    this.orders.push(newOrder);
                    console.log(`Successfully added ${item}`);
                },

For getAllOrders function with logic :

             getAllOrders: function() {
                    return this.orders;
                },

For updateOrders function with logic :

             updateOrder: function (index,item, newQty, newPrice) {
                    if (this.orders[index]) {
                        this.orders[index].item = item;
                        this.orders[index].quantity = newQty;
                        this.orders[index].price = newPrice;
                        console.log(`Update orders at ${index} and ${item}`);
                    } else {
                        console.log('No Orders available')
                    }
                },

For Delete function with logic :

             deleteOrder: function (index) {
                    if (index > - 1 && index < this.orders.length) {
                        let removed = this.orders.splice(index, 1);
                        console.log(`Delete order item: ${removed[0].item}`)
                    }
                },

To calculate the total value of price:

             calculateTotalValue: function () {
                    let total = 0;
                    this.orders.forEach(orders => {
                        total += (orders.quantity * orders.price);
                    });
                    return total.toFixed(2);
                },


To Calculate Order Process Shipping and discount:

            calculateOrderProcess: function () {
                    let total = 0;
                    let goodservicetax = 0;
                    let discount = 0.25;
                    this.orders.forEach(orders => {
                        total += (orders.quantity * orders.price);
                        discounted = total * discount;
                        shipping = 15 * 5 *3 / 5
                        // discountprice = total - discounted;
                        totalprice = (total - discounted) + shipping;
                    });
                   // return discountprice.toFixed(2);
            
                    return totalprice.toFixed(2);
                },

To display order tables:

                displayOrderTables: function () {
                    console.log('\n|-----Order Lists-----');
                    // Using a console table for a clean JS output
                    if (this.orders.length === 0) {
                        console.log('No available orders');
                    } else {
                        console.table(this.orders);
                    }
                }
            }

            
# For Setup the Input

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

# Displays Calculate Total Price, and Total process Checkout after run node app.js

            console.log("|----Receipt----|");
            console.log("|----E-Commerce Checkout----|");
            console.log("");
            console.log('Total value: $' + ecommerce.calculateTotalValue());
            
            console.log("");
            console.log("Checkout Process after Payment:");
            console.log("");
            
            console.log("Total process checkout: $" + ecommerce.calculateOrderProcess());

# Output in Ordering Items in E-Commerce

            Initializing Order Online Process!
            Successfully added FireWood Setter
            Successfully added Table Ice Diamond
            Successfully added Beef Angus Sirloin
            Successfully added Fish Red Snapper
            Successfully added kinki rockfish
            Successfully added Atlantic Salmon
            Successfully added Yoyo Super
            
            |-----Order Lists-----
            ┌─────────┬────────────┬──────────────────────┬──────────┬───────┐
            │ (index) │ serialcode │ item                 │ quantity │ price │
            ├─────────┼────────────┼──────────────────────┼──────────┼───────┤
            │ 0       │ 'T30'      │ 'FireWood Setter'    │ 3        │ 7.5   │
            │ 1       │ 'R369'     │ 'Table Ice Diamond'  │ 3        │ 9.6   │
            │ 2       │ 'T95L'     │ 'Beef Angus Sirloin' │ 2        │ 10.3  │
            │ 3       │ 'T443'     │ 'Fish Red Snapper'   │ 3        │ 7.3   │
            │ 4       │ 'J90'      │ 'kinki rockfish'     │ 4        │ 8.9   │
            │ 5       │ 'A78'      │ 'Atlantic Salmon'    │ 4        │ 8.9   │
            │ 6       │ 'R670'     │ 'Yoyo Super'         │ 2        │ 12    │
            └─────────┴────────────┴──────────────────────┴──────────┴───────┘
            Update orders at 4 and kinki rockfish
            Update orders at 5 and Atlantic Salmon
            Updated Tables:
            
            |-----Order Lists-----
            ┌─────────┬────────────┬──────────────────────┬──────────┬───────┐
            │ (index) │ serialcode │ item                 │ quantity │ price │
            ├─────────┼────────────┼──────────────────────┼──────────┼───────┤
            │ 0       │ 'T30'      │ 'FireWood Setter'    │ 3        │ 7.5   │
            │ 1       │ 'R369'     │ 'Table Ice Diamond'  │ 3        │ 9.6   │
            │ 2       │ 'T95L'     │ 'Beef Angus Sirloin' │ 2        │ 10.3  │
            │ 3       │ 'T443'     │ 'Fish Red Snapper'   │ 3        │ 7.3   │
            │ 4       │ 'J90'      │ 'kinki rockfish'     │ 5        │ 6.2   │
            │ 3       │ 'T443'     │ 'Fish Red Snapper'   │ 3        │ 7.3   │
            │ 4       │ 'J90'      │ 'kinki rockfish'     │ 5        │ 6.2   │
            │ 5       │ 'A78'      │ 'Atlantic Salmon'    │ 5        │ 7.68  │
            │ 6       │ 'R670'     │ 'Yoyo Super'         │ 2        │ 12    │
            └─────────┴────────────┴──────────────────────┴──────────┴───────┘
            Delete order item: Yoyo Super
            
            |-----Order Lists-----
            ┌─────────┬────────────┬──────────────────────┬──────────┬───────┐
            │ (index) │ serialcode │ item                 │ quantity │ price │
            ├─────────┼────────────┼──────────────────────┼──────────┼───────┤
            │ 0       │ 'T30'      │ 'FireWood Setter'    │ 3        │ 7.5   │
            │ 1       │ 'R369'     │ 'Table Ice Diamond'  │ 3        │ 9.6   │
            │ 2       │ 'T95L'     │ 'Beef Angus Sirloin' │ 2        │ 10.3  │
            │ 3       │ 'T443'     │ 'Fish Red Snapper'   │ 3        │ 7.3   │
            │ 4       │ 'J90'      │ 'kinki rockfish'     │ 5        │ 6.2   │
            │ 5       │ 'A78'      │ 'Atlantic Salmon'    │ 5        │ 7.68  │
            └─────────┴────────────┴──────────────────────┴──────────┴───────┘
            |----Receipt----|
            |----E-Commerce Checkout----|
            
            Total value: $163.20
            
            Checkout Process after Payment:
            
            Total process checkout: $167.40

# Requirements

1. Clone Repository

2. Rename file on lab2_webapi_assignment1

3. Ensure node js is installed

4. Run the Node by node app.js


   
    
# References

https://sitegiant.sg/order-management/

https://www.clarionshipping.com/en-sg/service/ecommerce-fulfillment/

https://www.shopify.com/sg/
