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

class Flowershop { //stok kontrol edecegim bu sınıfta
    constructor(name = flowers.name, price = flowers.price, stock= flowers.stock) {
        this.name = name
        this.price = price
        this.stock = stock
    }

    decreaseAmount(flowers) {
        flowers.stock = flowers.stock -1 
        console.log('Remaining ' +flowers.name + ' stock: ' + flowers.stock)
    }
}

class Cart extends Flowershop {
    constructor(item = flowers, items = [], totalCartAmount, price = item.price, itemsPriceList = []) {
        super()
        this.item = item
        this.price = price
        this.totalCartAmount = totalCartAmount
        this.items = items
        this.itemsPriceList = itemsPriceList
    }

    addItem(item, items = [], price = item.price, itemsPriceList = []) {
        this.item = item
        this.items = items
        this.price = price
        this.itemsPriceList = itemsPriceList


        items.push(item)
        console.log(items)

        itemsPriceList.push(item.price)
        console.log(itemsPriceList)
        
        this.decreaseAmount(item)
        this.CalcTotalCartAmount(itemsPriceList)        
    }

    CalcTotalCartAmount(itemsPriceList) {
        
        this.itemsPriceList = itemsPriceList
        var totalCartAmount = itemsPriceList.reduce(function(a, b) {
            return a + b;
        }, 0)
        console.log(totalCartAmount)
        return totalCartAmount

    } 
    
}

var cart = new Cart()

cart.addItem(flowers.ROSES)
cart.addItem(flowers.LILLIES)
cart.addItem(flowers.ROSES)
