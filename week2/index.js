const flowerName = {
    Roses,
    Lillies,
    Orchids,
    Sunflower
  }
  
  Object.freeze(flowerName);

class Flower {
    constructor(flowerName, price) {
        this.flowerName = flowerName
        this.price = price
    }
}

// 

class Cart {
    constructor(items = flowerName[], totalCartAmount, status) {
        this.items = items
        this.totalCartAmount = totalCartAmount
        this.status = status
        
    }
}

//

class Customer {
    constructor(id, name, email, password, address, phone, orders = [], items = Cart.items) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.address = address
        this.phone = phone
        this.orders = orders
        this.items = items
    }

    updateProfile(email, password, address, phone) {
        this.email = email
        this.password = password
        this.address = address
        this.phone = phone
    }    
    
    addToCart(cart, items = []) {
        this.items.push(flowerName) = items
        this.cart = cart
    }

    removeFromCart(cart, items = []) {
        this.items
        this.cart = cart //her seferinde cart in güncellenmesini teyid etmiş olur muyum boylece?
    }
}