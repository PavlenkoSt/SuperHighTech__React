import { FC } from "react"
import { NavLink } from "react-router-dom"
import visa from '../../../../assets/visa.png'
import { ShoppingCartOutlined } from '@ant-design/icons'

type OwnProps = {
    price: string
    inStock: boolean
}

const ProductPay: FC<OwnProps> = ({ price, inStock }) => {
    return (
        <div className='pay'>
            <div className='pay-price'>{ `${price} грн` }</div>
            <div className='pay-stock'>{ inStock ? 'ЕСТЬ В НАЛИЧИИ' : 'НЕТ В НАЛИЧИИ' }</div>
            <p className='pay-desc'>Здесь вы можете заказать товар и забрать его в ближайшем к вам магазине Super High Tech</p>
            <NavLink className='btn-order' to='/'>{ inStock ? 'Купить' : 'Заказать' }</NavLink>
            <div className='pay-subdesc'>
                <div className='pay-header'>
                    <ShoppingCartOutlined className='pay-icon'/>
                    <h4>Получение заказа</h4>
                </div>
                <p>Товар можно получить в выбранном при оформлении заказа магазине Мобилочка.</p>
                <p>После подтверждения заказа, заказ будет ожидать вас сутки с момента оформления.</p>
            </div>
            <img className='pay-visa' src={ visa } alt="visa"/>
        </div>
    )
}

export default ProductPay