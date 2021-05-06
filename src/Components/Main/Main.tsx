import CarouselEl from './Carousel/Carousel'
import SuperPrice from './SuperPrice/SuperPrice'
import './main.css'
import { useEffect } from 'react'
import pages from '../../MobX/pages'
import ProductPage from '../common/ProductPage/ProductPage'
import { RouteComponentProps, withRouter } from 'react-router'
import { FC } from 'react'

const Main: FC<RouteComponentProps> = ({ location }) => {

    useEffect(() => {
        const li = document.querySelector('.ant-menu-item.ant-menu-item-only-child.ant-menu-item-selected')
        li?.classList.remove('ant-menu-item-selected')
        pages.clearFilteredOption()
    }, [])

    const itemForProductPage = location.pathname.match(/\/product__(.+)$/)

    if(itemForProductPage){
        const url = itemForProductPage[1]
        
        return <ProductPage url={url} />
    }

    return (
        <>
            <CarouselEl/>
            <SuperPrice/>
        </>
    )
}

export default withRouter(Main)