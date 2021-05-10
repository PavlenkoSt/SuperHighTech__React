import { FC } from "react"
import cart from "../../../MobX/cart"
import { CloseSquareOutlined, UpSquareOutlined, DownSquareOutlined } from '@ant-design/icons'
import priceToNumber from "../../../helpers/priceToNumber"
import numbersToPrice from "../../../helpers/numbersToPrice"
import { NavLink } from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type CartItemType = {
    name: string
    price: string
    photo: string
    path: string
    url: string
    id: number
    index: number
}

const CartItem: FC<CartItemType> = ({ name, price, photo, path, url, id, index }) => {

    const count = cart.getCountCartProduct(id)

    const deleteProduct = () => {
        cart.deleteProductFromCart(id)
        toast.dark("Товар успешно удален из корзины!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <NavLink to={`${path}/product__${url}`}>
                    <div className='cart-name'><img className='cart-photo' src={photo} alt='product'/>
                        <span>{name}</span>
                    </div> 
                </NavLink>
            </td>
            <td>
                <div className='cart-count' >
                    <button onClick={() => cart.changeCountProductOfCart(id, true)} className='cart-count-btn'><UpSquareOutlined /></button>
                    { count }
                    <button disabled={count === 1} onClick={() => cart.changeCountProductOfCart(id, false)} className='cart-count-btn'><DownSquareOutlined /></button>
                </div>
            </td>
            <td>{ numbersToPrice(priceToNumber(price) * count)}</td>
            <td>
                <button className='cart-delete' onClick={deleteProduct}><CloseSquareOutlined /></button>
            </td>
        </tr>
    )
}

export default CartItem