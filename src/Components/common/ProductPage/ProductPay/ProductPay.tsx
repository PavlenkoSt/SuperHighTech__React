import { FC } from "react"
import visa from '../../../../assets/visa.png'
import { ShoppingCartOutlined } from '@ant-design/icons'
import cart from "../../../../MobX/cart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type OwnProps = {
    price: string
    inStock: boolean
    id: number
}

const ProductPay: FC<OwnProps> = ({ price, inStock, id }) => {

    const addToCart = () => {
        if(inStock){
            cart.addProductToCart(id)
            toast.dark("Товар успешно добавлен в корзину!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <div className='pay'>
            <div className='pay-price'>{ `${price} грн` }</div>
            <div className='pay-stock'>{ inStock ? 'ЕСТЬ В НАЛИЧИИ' : 'НЕТ В НАЛИЧИИ' }</div>
            <p className='pay-desc'>Здесь вы можете заказать товар и забрать его в ближайшем к вам магазине Super High Tech</p>
            <button onClick={addToCart} className='btn-order'>{ inStock ? 'Добавить в корзину' : 'Заказать' }</button>
            <div className='pay-subdesc'>
                <div className='pay-header'>
                    <ShoppingCartOutlined className='pay-icon'/>
                    <h4>Получение заказа</h4>
                </div>
                <p>Товар можно получить в выбранном при оформлении заказа магазине Мобилочка.</p>
                <p>После подтверждения заказа, заказ будет ожидать вас сутки с момента оформления.</p>
            </div>
            <img className='pay-visa' src={ visa } alt="visa"/>
            <ToastContainer />
        </div>
    )
}

export default ProductPay