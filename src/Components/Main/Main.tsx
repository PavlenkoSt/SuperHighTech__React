import CarouselEl from './Carousel/Carousel'
import SuperPrice from './SuperPrice/SuperPrice'
import './main.css'
import { useEffect } from 'react'
import pages from '../../MobX/pages'
import ProductPage from '../common/ProductPage/ProductPage'
import { RouteComponentProps, withRouter } from 'react-router'
import { FC } from 'react'
import { useSpring } from '@react-spring/core'
import { config } from '@react-spring/core'
import { animated } from '@react-spring/web'

const Main: FC<RouteComponentProps> = ({ location }) => {

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

    useEffect(() => {
        const li = document.querySelector('.ant-menu-item.ant-menu-item-only-child.ant-menu-item-selected')
        li?.classList.remove('ant-menu-item-selected')
        pages.clearFilteredOption()
    }, [])

    const itemForProductPage = location.pathname.match(/\/product__(.+)$/)

    if(itemForProductPage){
        const url = itemForProductPage[1]
        
        return <animated.div style={styles}><ProductPage url={url} /></animated.div>
    }

    return (
        <animated.div style={styles}>
            <CarouselEl/>
            <SuperPrice/>
        </animated.div>
    )
}

export default withRouter(Main)