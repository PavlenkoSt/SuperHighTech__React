import { FC } from "react"
import { NavLink } from "react-router-dom"

type CatalogItemPropsType = {
    name: string
    price: string
    photo: string
    path: string,
    url: string
}

const CatalogItem: FC<CatalogItemPropsType> = ({ name, price, photo, path, url }) => {

    return (
        <div className='catalog-item'>
            <NavLink to={`${path}/product__${url}`}><img className='catalog-photo' src={photo} alt="product"/></NavLink>
            <NavLink className='catalog-name' to={`${path}/product__${url}`}>{name}</NavLink>
            <div className='catalog-price'>{`${price} грн`}</div>
            <NavLink className='btn-order' to={`${path}/product__${url}`}>Заказать</NavLink>
        </div>
    )
}

export default CatalogItem