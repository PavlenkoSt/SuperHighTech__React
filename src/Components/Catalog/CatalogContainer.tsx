import { observer } from "mobx-react-lite"
import { FC } from "react"
import { useEffect } from "react"
import { RouteComponentProps, withRouter } from "react-router"
import pages from "../../MobX/pages"
import { ProductType } from "../../storage/products"
import ProductPage from "../common/ProductPage/ProductPage"
import Catalog from "./Catalog"
import CatalogItem from "./CatalogItem/CatalogItem"
import headerMobX from '../../MobX/header'
import { config, useSpring } from "@react-spring/core"
import { animated } from "@react-spring/web"

type CatalogPropsType = {
    searchedItems?: Array<ProductType>
}

const CatalogContainer: FC<RouteComponentProps & CatalogPropsType> = observer(({location, searchedItems}) => {

    const searchSearch = location.pathname.match(/\/(search)\/(.+)/)
    const isSearchPage = searchSearch && searchSearch[1] === 'search'
    
    const page: any = pages.filteredPage 

    useEffect(() => {
        const links = headerMobX.allLinks
        if(links.indexOf(location.pathname) !== -1){
            pages.setActivelink(location.pathname)
        }
    }, [location.pathname])

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


    if(!page.length && !isSearchPage){
        return <animated.div style={styles}><p className='page-not-found'>Ой, что-то пошло не так! Данной страницы не существует!</p></animated.div>
    }

    const iterationItems = searchedItems && searchedItems.length ? searchedItems : pages.setProducts[pages.currentPage - 1]
    const catalogItems = iterationItems ? iterationItems.map((product: any) => <CatalogItem 
        key={product.id} 
        name={product.name} 
        price={product.price}
        photo={product.photo}
        path={location.pathname}
        url={product.url}
    />) : null

    const header = page.length ? page[0].header : searchSearch && searchSearch[2]
    const counter = pages.totalCount

    if(!catalogItems || !catalogItems.length){
        return <animated.div style={styles}><p className='page-not-found'>По данному запросу товаров не найдено!</p></animated.div>
    }

    const itemForProductPage = location.pathname.match(/\/product__(.+)$/)

    if(itemForProductPage){
        const url = itemForProductPage[1]
        
        return ( 
            <animated.div style={styles}>
                <ProductPage url={url} />
            </animated.div>
        )
    }

    return (
        <animated.div style={styles}>
            <Catalog header={header} counter={counter} catalogItems={catalogItems} total={pages.totalCount} animation={animation}/>
        </animated.div>
    )
})

export default withRouter(CatalogContainer)