import { ProductType } from './../storage/products'
import { makeAutoObservable } from "mobx"
import priceToNumber from "../helpers/priceToNumber"
import products from "../storage/products"

class Products{
    products = products

    maxPriceOfProducts = (() => {
        const pricesArr: Array<number> = []
        products.forEach((product: ProductType) => {
            pricesArr.push(priceToNumber(product.price))
        })
        return Math.max.apply(null, pricesArr)
    })()

    searchProducts(searchParam: string){
        return products.filter((product: ProductType) => {
            return product.name.toLowerCase().includes(searchParam.toLowerCase())
        })
    }

    getProductsForMainPage(){
        const allProducts = this.products.reverse()
        const resultProducts = []
        for(let i = 0; i<=3; i++){
            resultProducts.push(allProducts[i])
        }
        return resultProducts
    }

    getProductForProductPage(url: string){
        const filteredProduct = products.filter((product: ProductType) => product.url === url)
        return filteredProduct[0]
    }

    getNameFromUrl(url: string){
        const product = this.getProductForProductPage(url)
        return product.name
    }

    constructor(){
        makeAutoObservable(this)
    }
}


export default new Products()