// const { orders } = require("./orders.json");
module.exports = {

    // Functions of orders 
    orders: [],

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

    getAllOrders: function() {
        return this.orders;
    },

    // update table
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

    

    // delete table

    deleteOrder: function (index) {
        if (index > - 1 && index < this.orders.length) {
            let removed = this.orders.splice(index, 1);
            console.log(`Delete order item: ${removed[0].item}`)
        }
    },

    // searchOrderItem: function () {
        
    // },

    calculateTotalValue: function () {
        let total = 0;
        this.orders.forEach(orders => {
            total += (orders.quantity * orders.price);
        });
        return total.toFixed(2);
    },

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