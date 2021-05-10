import cart from "../../../MobX/cart"


const CartBill = () => {
    return (
        <tr className='cart-bill'>
            <td colSpan={3}>Всего к оплате</td>
            <td colSpan={2}>{cart.getAllSumFromCart() + ' грн'}</td>
        </tr>
    )
}

export default CartBill