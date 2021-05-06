import { ProductType } from './../storage/products'
import { pageType } from './../storage/pages'
import { makeAutoObservable } from "mobx"
import priceToNumber from "../helpers/priceToNumber"
import pages from "../storage/pages"
import products from "../storage/products"

type SideFilteredOptionsType = {
    price: Array<never> | Array<number>
    category: Array<any> | Array<string>
}

class Pages {
    pages: Array<pageType> = pages

    activeLink: string = '/new-products'

    sideFilteredOptions:SideFilteredOptionsType = {
        price: [],
        category: []
    }

    sideSortedOption: string | null = null
    
    load: boolean = true

    changeLoadStatus(status: boolean){
        this.load = status
    }

    setPriceSideFilteredOptions(val: Array<number>){
        this.sideFilteredOptions.price = val
    }

    setCategorySideFilteredOptions(value: string, status: boolean){
        if(status){
            this.sideFilteredOptions.category.push(value)
        }else{
            this.sideFilteredOptions.category = this.sideFilteredOptions.category.filter(category => category !== value)
        }
    }

    setSideSortedOption(value: string){
        this.sideSortedOption = value
    }

    clearFilteredOption(){
        this.sideFilteredOptions.category = []
    }
    
    setActivelink(link: string){
        this.activeLink = link
    }

    useSideFilteredOptions(arr: Array<ProductType>){
        let resultFilter = arr
        if(this.sideFilteredOptions.price.length){
            resultFilter = resultFilter.filter((product: ProductType) => {
                return priceToNumber(product.price) >= this.sideFilteredOptions.price[0] && priceToNumber(product.price) <= this.sideFilteredOptions.price[1]
            })
        }
        if(this.sideFilteredOptions.category.length){
            resultFilter = resultFilter.filter((product: ProductType) => this.sideFilteredOptions.category.indexOf(product.category) !== -1)
        }
        return resultFilter
    }

    useSortedOption(arr: Array<ProductType>){
        let resultSort = arr
        if(this.sideSortedOption){
            switch(this.sideSortedOption){
                case 'news': {
                    return arr.sort((a,b) => {
                        return b.id - a.id
                    })
                }
                case 'decrease': {
                    return arr.sort((a,b) => {
                        return priceToNumber(b.price) - priceToNumber(a.price)
                    })
                }
                case 'increase': {
                    return arr.sort((a,b) => {
                        return priceToNumber(a.price) - priceToNumber(b.price)
                    })
                }
                default: return resultSort
            }
        }
        return resultSort
    }

    getCategoriesProducts(){
        const result: Array<string> = []
        this.activeProducts.forEach((product: ProductType) => {
            if(result.indexOf(product.category) === -1){
                result.push(product.category)
            }
        })
        return result
    }

    constructor(){
        makeAutoObservable(this)
    }

    activeProducts:any = []

    splitProductsToPortion(arr: any){
        let obj: any = Object.assign(arr)
        const countIteration = Math.ceil(arr.length / 8)
        const res: any = []
        for(let i = 1; i <= countIteration; i++){
            res[i - 1] = []
            for(let j = 0; j <= 8 - 1; j++){
                if(obj[j]){
                    res[i - 1].push(obj[j])
                }
            }
            obj = obj.filter((item: any, i: number) => i > 8 - 1)
        }
        return res
    }

    get setProducts(){
        switch(this.activeLink){
            case '/new-products': {
                const filteredProducts = products.filter((product: ProductType) => product.date.substr(product.date.lastIndexOf('.') + 1) > '2020')
                this.activeProducts = filteredProducts
                const sideFilteredProducts = this.useSideFilteredOptions(filteredProducts)
                this.setTotalCount(sideFilteredProducts.length)
                return this.splitProductsToPortion(this.useSortedOption(this.useSideFilteredOptions(filteredProducts)))
            }
            case '/super-price': {
                const filteredProducts = products.filter((product: ProductType) => priceToNumber(product.price) < 10000)
                this.activeProducts = filteredProducts
                const sideFilteredProducts = this.useSideFilteredOptions(filteredProducts)
                this.setTotalCount(sideFilteredProducts.length)
                return this.splitProductsToPortion(this.useSortedOption(this.useSideFilteredOptions(filteredProducts)))
            }
            case '/apple' : 
            case '/samsung' : 
            case '/xiaomy' : 
            case '/huawei' : 
            case '/zte' : 
            case '/realmy': {
                const filteredProducts = products.filter((product: ProductType) => product.company === this._filterCompanyName[this.activeLink])
                this.activeProducts = filteredProducts
                const sideFilteredProducts = this.useSideFilteredOptions(filteredProducts)
                this.setTotalCount(sideFilteredProducts.length)
                return this.splitProductsToPortion(this.useSortedOption(this.useSideFilteredOptions(filteredProducts)))
            }
            default: return products
        }
    }

    setCurrentPage(num: number){
        this.currentPage = num
    }
    setTotalCount(num: number){
        this.totalCount = num
    }
    totalCount = 0
    currentPage = 1

    _filterCompanyName: any = {
        '/apple': 'Apple',
        '/samsung': 'Samsung',
        '/xiaomy': 'Xiaomy',
        '/huawei': 'Huawei',
        '/zte': 'ZTE',
        '/realmy': 'Realmy'
    }

    get filteredPage(){
        return this.pages.filter(page => page.link === this.activeLink)
    }

}

export default new Pages()