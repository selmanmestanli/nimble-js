const flowers = {
    ROSES: {
        name: 'rose',
        price: 3,
        stock: 10
    },
    LILLIES: {
        name: 'lilium',
        price: 4,
        stock: 20
    },
    ORCHIDS: {
        name: 'orchid',
        price: 5,
        stock: 30
    },
    SUNFLOWER: {
        name: 'sunflower',
        price: 6,
        stock: 40
    }
}
  
Object.freeze(flowers);

class Flowershop { //stogu kontrol edecegim bu sınıfta
    constructor(name = flowers.name, price = flowers.price, stock= flowers.stock) {
        this.name = name
        this.price = price
        this.stock = stock
        //this.amount = amount
    }

    static showInfo(flowers) {
        console.log('Remaining ' +flowers.name + ' stock: ' + flowers.stock)
    }

    static decreaseAmount(flowers) {
        flowers.stock = flowers.stock -1 
        console.log('Remaining ' +flowers.name + ' stock: ' + flowers.stock)
    }

    

}

//Flowershop.showInfo(flowers.ROSES)
// Flowershop.decreaseAmount(flowers.ROSES)
// Flowershop.decreaseAmount(flowers.ROSES)
// Flowershop.decreaseAmount(flowers.ROSES)
//console.log(flowers.ROSES.amount)


class Cart extends Flowershop {
    constructor(item = flowers) {
        //super()
        this.item = item
        //this.price = flowers.price
        //this.amount = amount
        //this.totalCartAmount = 0
        //this.items = []
        //this.itemsPriceList = []
    }

    static addItem(item, items = []) {
        //this.price = price
        //console.log(price)
        this.items = items
        //itemsPriceList = [this.price]
        items.push(item)
        console.log(items)
        
        //itemsPriceList.push(this.price)
        //console.log(itemsPriceList)
        this.decreaseAmount(item)
        this.totalCartAmount(item)
        return
    }

    static totalCartAmount(item, price = item.price, itemsPriceList = []) {
        this.item = item
        this.price = item.price
        this.itemsPriceList = itemsPriceList
        this.itemsPriceList.push(price)
        console.log(itemsPriceList)
        var totalCartAmount = itemsPriceList.reduce(function(a, b) {
            return a + b;
        }, 0)
        console.log(totalCartAmount)
        return totalCartAmount;

    }  
}

//Cart.totalCartAmount(flowers.SUNFLOWER,flowers.SUNFLOWER)
//var cart = new Cart(flowers.LILLIES, flowers.LILLIES)
Cart.addItem(flowers.ROSES)
Cart.addItem(flowers.SUNFLOWER)
//Cart.totalCartAmount(flowers.ROSES)


//cart = new Cart()
//cart.item.push(flowers.ROSES)
//console.log(cart)

// class Customer {
//     constructor(name, phone) {
//         this.name = name
//         this.phone = phone
//         this.cart = []
//         //this.checkoutCart = []
//     }

//     updateProfile(phone) {
//         this.phone = phone
//     }
    
//     addToCart(item = flowers) {
//         var cart = new Cart(item, this)
//         this.cart.push(item)

//         return cart
//     }

//     removeFromCart(item = flowers) {
//         //this.item = item -> bunu koyunca neden customer sınıfında son çıkarılan item i gösteriyor?
        
//         var cart = new Cart(item, this)

//         const valueToRemove = this.cart.indexOf(item)
//         this.cart.splice(valueToRemove, 1)
    
//         return cart
//     }
//     proceedToCheckout(cart) {
//         //this.checkoutCart = checkoutCart
        
//         //const checkoutCart = new checkoutCart(this.cart,this)
//         //this.checkoutCart.push(this.cart)
//         cart = this.cart
//         checkoutCart = []

//         checkoutCart = this.cart.slice()
//     }

// }
// const Selman = new Customer('selman', '532')
// //console.log(Selman)

// Selman.updateProfile('555')
// //console.log(Selman)

// Selman.addToCart(flowers.ROSES)
// //console.log(Selman)
// Selman.addToCart(flowers.LILLIES)
// //console.log(Selman)
// //console.log(Selman.cart[0].price)
// //console.log(Selman.cart[0].name)
// Selman.removeFromCart(flowers.LILLIES)
// //console.log(Selman)
// Selman.addToCart(flowers.SUNFLOWER)
// //console.log(Selman)
// Selman.addToCart(flowers.ROSES)
// //console.log(Selman)
// //console.log(Selman.cart[0].name)
// Selman.removeFromCart(flowers.SUNFLOWER)
// console.log(Selman)
// console.log(Selman.cart[0].price)
// console.log(Selman.checkoutCart)

// class Checkout {
//     constructor(customer = Customer) {
//         this.customer = customer
//         this.cart = this.cart
//         this.deliveryAddress = deliveryAddress
//     }
// }


