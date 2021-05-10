import { config } from "@react-spring/core"
import { useSpring } from "@react-spring/core"
import { animated } from "@react-spring/web"
import { FC, useEffect } from "react"
import { NavLink } from "react-router-dom"

type CatalogItemPropsType = {
    name: string
    price: string
    photo: string
    path: string,
    url: string
}

const CatalogItem: FC<CatalogItemPropsType> = ({ name, price, photo, path, url }) => {

    const [styles, api] = useSpring(() => ({ opacity: 0, transform: 'scale(0.8)', config: config.molasses }))

    useEffect(() => {
        api.start({ opacity: 1, transform: `scale(1)` })
        return () => {
            api.start({ opacity: 0, transform: `scale(0.8)` })
        }
    }, [])

    return (
        <animated.div style={styles} className='catalog-item'>
            <NavLink to={`${path}/product__${url}`}><img className='catalog-photo' src={photo} alt="product"/></NavLink>
            <NavLink className='catalog-name' to={`${path}/product__${url}`}>{name}</NavLink>
            <div className='catalog-price'>{`${price} грн`}</div>
            <NavLink className='btn-order' to={`${path}/product__${url}`}>Заказать</NavLink>
        </animated.div>
    )
}

export default CatalogItem