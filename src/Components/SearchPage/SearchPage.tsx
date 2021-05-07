import { config } from "@react-spring/core"
import { useSpring } from "@react-spring/core"
import { animated } from "@react-spring/web"
import { FC, useEffect } from "react"
import { RouteComponentProps, withRouter } from "react-router"
import pages from "../../MobX/pages"
import products from "../../MobX/products"
import CatalogContainer from "../Catalog/CatalogContainer"
import ProductPage from "../common/ProductPage/ProductPage"

const SearchPage: FC<RouteComponentProps> = ({location}) => {

    const [styles, api] = useSpring(() => ({ opacity: 0, transform: 'scale(0.8)', config: config.molasses }))

    const animation = () => {
        api.start({ opacity: 0, transform: `scale(0.8)` })

        setTimeout(() => {
            api.start({ opacity: 1, transform: `scale(1)` })
        }, 100);
    }

    useEffect(() => {
        animation()
    }, [location.pathname, pages.sideSortedOption])

    const searchParam: any = location.pathname.match(/\/search\/(.+)\/?/)

    if(!searchParam){
        return <animated.div style={styles}><p className='page-not-found'>Ошибка! Введите поисковой запрос!</p></animated.div>
    }

    const itemForProductPage = location.pathname.match(/\/product__(.+)$/)

    if(itemForProductPage){
        const url = itemForProductPage[1]
        return <animated.div style={styles}><ProductPage url={url} /></animated.div>
    }

    const searchElems = products.searchProducts(searchParam[1])

    if(!searchElems.length){
        return <animated.div style={styles}><p className='page-not-found'>По данному запросу ничего не найдено!</p></animated.div>
    }
    
    return <CatalogContainer searchedItems={searchElems} />
}

export default withRouter(SearchPage)