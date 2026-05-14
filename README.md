# Assignment 1

Order items to call up input Functions your node modules and display output functions in Order Management System node js

No set up required



Function of orders: orders: [] - to display the json table with orders




addtoOrder: require function fields - serialcode, item, quantity, price, use letnewOrder, and use this.orders.push(newOrder), to add new orders




getAllOrders: No field Required - function () { return this.orders;}, to push in a new order




updateOrder: field required - index, item, newQty, newPrice - to update a new item on index number with new price and new quantity

For Example:


if (this.orders[index]) {
                          this.orders[index].item = item;
                          this.orders[index].quantity = newQty;
                          this.orders[index].price = newPrice;
              }



          
deleteOrder - field required index: to Delete an item table with index number



For example of this


logic for deleteOrder use if else : if (index > - 1 && index < this.orders.length) {
                                        let removed = this.orders.splice(index, 1);
                                        console.log(`Delete order item: ${removed[0].item}`)
                                    }
                                    


calculateTotalValue: no required fields in function()  To calculate the total price of the items

For example
uses let total and forEach:


this.orders.forEach(orders => {
                            total += (orders.quantity * orders.price);
                            });
                            return total.toFixed(2);

                            
                            

calculateOrderProcess: no required in function (), 

For example: 
use the foreach
require variable on let - total, discount,
              this.orders.forEach(orders => {
              total += (orders.quantity * orders.price);
              discounted = total * discount;
              shipping = 15 * 5 *3 / 5
              // discountprice = total - discounted;
              totalprice = (total - discounted) + shipping;
          });


  displayOrderTables: no required in function()
  use if else logic:
                      if (this.orders.length === 0) {
                          console.log('No available orders');
                      } else {
                          console.table(this.orders);
                      }


Then, run on nodemon app.js on the terminal
                


You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# output




# References

https://sitegiant.sg/order-management/

https://www.clarionshipping.com/en-sg/service/ecommerce-fulfillment/

https://www.shopify.com/sg/
