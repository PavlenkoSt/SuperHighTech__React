import { ProductType } from './../storage/products';
import { makeAutoObservable } from "mobx"
import priceToNumber from "../helpers/priceToNumber"
import products from "../storage/products"

class Products{
    products = products

    maxPriceOfProducts = (() => {
        const pricesArr: Array<number> = []
        products.forEach((product: any) => {
            pricesArr.push(priceToNumber(product.price))
        })
        return Math.max.apply(null, pricesArr)
    })()

    searchProducts(searchParam: string){
        return products.filter((product: any) => {
            const arr = product.name.split(' ').map((el: string) => el.toLowerCase())
            if(arr.indexOf(searchParam.toLowerCase()) !== -1){
                return true
            }
            return false
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