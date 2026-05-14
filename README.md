# Assignment 1

Order items to call up input Functions your node modules and display output functions in Order Management System node js



| Function | Description| Fields | 
| :---         |     :---:                                |          ---: |
| addtoOrder  | To add a new orders in a new item        |        No fields                | 
|getAllOrders | To retrieve all orders                    |           No Required Fields |
|updateOrder | To Update the Order with the index of the item with new qty and price | index, item, newQty, newPrice|
|deleteOrder | To delete the order with the index of the item from order table | index |



You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# Code for Functions:

function (serialcode, item, quantity, price) {
        let newOrder = {
            serialcode: serialcode,
            item: item,
            quantity: quantity,
            price: price,
        }
        this.orders.push(newOrder);
        console.log(`Successfully added ${item}`);
    },

# References

https://sitegiant.sg/order-management/

https://www.clarionshipping.com/en-sg/service/ecommerce-fulfillment/

https://www.shopify.com/sg/
