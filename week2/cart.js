const flowers = {
    ROSES: {
        name: 'rose',
        price: 3
    },
    LILLIES: {
        name: 'lilium',
        price: 4
    },
    ORCHIDS: {
        name: 'orchid',
        price: 5
    },
    SUNFLOWER: {
        name: 'sunflower',
        price: 6
    }
}
//console.log(flowers.LILLIES.price)
//console.log(flowers.SUNFLOWER.name)
  
Object.freeze(flowers);

// class Flower {
//    constructor(flower = flowers) {
//        this.flower = flower
//    }
// }
// console.log(Flower.LILLIES)

// //const flower1 = new Flower(flowerName.LIL)
// //console.log(flower1)

class Cart {
    constructor(item = flowers) {
        //this.item = item
    }
    
}
//var cart = new Cart(flowers.LILLIES.name, flowers.LILLIES.price)
//cart = new Cart()
//cart.item.push(flowers.ROSES)
//console.log(cart)

class Customer {
    constructor(name, phone) {
        this.name = name
        this.phone = phone
        this.cart = []
    }

    updateProfile(phone) {
        this.phone = phone
    }
    
    addToCart(item = flowers) {
        //this.item = item  
        var cart = new Cart(item, this)

        this.cart.push(item)

        return cart
    }

}
const Selman = new Customer('selman', '532')
//console.log(Selman)

Selman.updateProfile('555')
//console.log(Selman)

Selman.addToCart(flowers.ROSES)
//console.log(Selman)
Selman.addToCart(flowers.LILLIES)
console.log(Selman)
console.log(Selman.cart[0].price)
console.log(Selman.cart[0].name)

    
    //addToCart(Customer) {
        
    //}
// }

// const selman = new Customer(1, 'Selman', 5305050)
// //selman.addToCart(cart, 'Lillies')
// console.log(selman)
