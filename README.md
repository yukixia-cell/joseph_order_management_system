# Assignment 1

Order items to call up input Functions your node modules and display output functions in Order Management System node js



| Function | Description| Fields | 
| :---         |     :---:                                |          ---: |
| addtoOrder  | To add a new orders in a new item        |        No fields                | 
|getAllOrders | To retrieve all orders                    |           No Required Fields |
|updateOrder | To Update the Order with the index of the item with new qty and price | index, item, newQty, newPrice|
|deleteOrder | To delete the order with the index of the item from order table | index |
|calculateTotalValue | To calculate the total value price of the items and multiply quantity | No Required Fields | 
| calculateOrderProcess| To calculate the full total price with shipping charges, and discounted in process order | No required order|
| displayOrderTables | To display the order Tables in order list in the e-commerce cart| no fields |




You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

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
# References

https://sitegiant.sg/order-management/

https://www.clarionshipping.com/en-sg/service/ecommerce-fulfillment/

https://www.shopify.com/sg/
