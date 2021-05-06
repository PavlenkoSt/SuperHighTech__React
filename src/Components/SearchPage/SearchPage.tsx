import { FC } from "react"
import { RouteComponentProps, withRouter } from "react-router"
import products from "../../MobX/products"
import CatalogContainer from "../Catalog/CatalogContainer"
import ProductPage from "../common/ProductPage/ProductPage"

const SearchPage: FC<RouteComponentProps> = ({location}) => {

    const searchParam: any = location.pathname.match(/\/search\/(.+)\/?/)

    if(!searchParam){
        return <p className='page-not-found'>Ой, что-то пошло не так! Данной страницы не существует!</p>
    }

    const itemForProductPage = location.pathname.match(/\/product__(.+)$/)

    if(itemForProductPage){
        const url = itemForProductPage[1]
        
        return <ProductPage url={url} />
    }

    const searchElems = products.searchProducts(searchParam[1])

    if(!searchElems.length){
        return <p className='page-not-found'>По данному запросу ничего не найдено!</p>
    }
    
    return <CatalogContainer searchedItems={searchElems} />
}

export default withRouter(SearchPage)