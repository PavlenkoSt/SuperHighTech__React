import { FC } from "react"
import CartHeader from "./CartHeader/CartHeader"
import './cart.css'
import CartBill from "./CartBill/CartBill"
import { animated } from "@react-spring/web"
import { ToastContainer } from 'react-toastify'

type CartPropsType = {
    styles: any
    productsInCart: Array<JSX.Element>
}

const Cart: FC<CartPropsType> = ({ styles, productsInCart }) => {

    return (
        <animated.div style={styles}>
            <h2 className='catalog-title cart-title'>Корзина</h2>
            { productsInCart.length ? (
                <>
                    <table className='cart-table'>
                        <CartHeader/>
                        <animated.tbody style={styles}>
                            { productsInCart }
                            <CartBill/>
                        </animated.tbody>
                    </table> 
                    <button className='cart-pay'>Оплатить</button>
                </>
            ) : <p className='page-not-found'>Ваша корзина пуста!</p> }
            <ToastContainer />
        </animated.div>
    )
}

export default Cart