import { ProductType } from './../storage/products';
import { makeAutoObservable } from 'mobx';
import products from '../storage/products';
import priceToNumber from '../helpers/priceToNumber';
import numbersToPrice from '../helpers/numbersToPrice';

type CartItem = {
    id: number
    count: number
}

class Cart {
    cart: Array<CartItem> = []

    getAllSumFromCart(){
        let sum = 0
        this.cart.forEach(item => {
            const product = products.find((product: ProductType) => product.id === item.id)
            sum += priceToNumber(product.price) * item.count
        })
        return numbersToPrice(sum)
    }

    addProductToCart(id: number){
        const cartItem = this.cart.find(item => item.id === id)
        if(cartItem){
            cartItem.count += 1
            this.cart = [...this.cart.filter(item => item.id !== id), cartItem]
        }else{
            this.cart.push({ id, count: 1 })
        }
    }

    getCountCartProduct(id: number){
        let count = 0
        this.cart.forEach(item => {
            if(item.id === id){
                count = item.count
            }
        })
        return count
    }

    changeCountProductOfCart(id: number, addMode: boolean){
        const productItem = this.cart.find(item => item.id === id)
        if(productItem){
            if(addMode){
                productItem.count += 1
            }else{
                if(productItem.count > 1){
                    productItem.count -= 1
                }
            }
            this.cart = [...this.cart.filter(item => item.id !== id), productItem ]
        } 
    }

    deleteProductFromCart(id: number){
        this.cart = this.cart.filter(item => item.id !== id)
    }

    get productsInCart(){
        const elems: Array<ProductType> = []
        products.forEach((product: ProductType) => {
            this.cart.forEach((cartItem: CartItem) => {
                if(product.id === cartItem.id){
                    elems.push(product)
                }
            })
        })
        return elems
    }

    constructor(){
        makeAutoObservable(this)
    }
}

export default new Cart()