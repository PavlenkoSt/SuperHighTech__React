import { config } from "@react-spring/core"
import { useSpring } from "@react-spring/core"
import { animated } from "@react-spring/web"
import { observer } from "mobx-react-lite"
import { FC } from "react"
import { useEffect } from "react"
import { RouteComponentProps, withRouter } from "react-router"
import cart from "../../MobX/cart"
import { ProductType } from "../../storage/products"
import ProductPage from "../common/ProductPage/ProductPage"
import Cart from "./Cart"
import CartItem from "./CartItem/CartItem"



const CartContainer: FC<RouteComponentProps> = observer(({ location }) => {

    const productsInCart = cart.productsInCart.map((product: ProductType, index: number) => {
        return <CartItem
            key={product.id} 
            id={product.id}
            name={product.name} 
            price={product.price}
            photo={product.photo}
            path={location.pathname}
            url={product.url}
            index={index}
        /> 
    })

    const [styles, api] = useSpring(() => ({ opacity: 0, transform: 'scale(0.8)', config: config.molasses }))

    const animation = () => {
        api.start({ opacity: 0, transform: `scale(0.8)` })

        setTimeout(() => {
            api.start({ opacity: 1, transform: `scale(1)` })
        }, 100);
    }

    useEffect(() => {
        animation()
    }, [location.pathname, productsInCart.length])

    const itemForProductPage = location.pathname.match(/\/cart\/product__(.+)$/)

    if(itemForProductPage){
        const url = itemForProductPage[1]
        return <animated.div style={styles}><ProductPage url={url} /></animated.div>
    }

    return <Cart 
        styles={styles}
        productsInCart={productsInCart}
    />
})

export default withRouter(CartContainer)