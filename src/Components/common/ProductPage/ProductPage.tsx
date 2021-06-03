import { FC, useEffect } from "react"
import products from "../../../MobX/products"
import ProductsDesc from "./ProductDesc/ProductDesc"
import './productPage.scss'
import ProductPay from "./ProductPay/ProductPay"

type OwnProps = {
    url: string
}

const ProductPage: FC<OwnProps> = ({ url }) => {

    useEffect(() => {
        const breadcrumb = document.querySelectorAll('.ant-breadcrumb-link')
        if(product){
            const name = products.getNameFromUrl(url)
            breadcrumb[breadcrumb.length - 1].textContent = name
        }else{
            breadcrumb[breadcrumb.length - 1].textContent = 'Ошибка'
        }
    }, [])

    const product = products.getProductForProductPage(url)

    if(!product){
        return <p className='page-not-found'>Ой, что-то пошло не так! Данной страницы не существует!</p>
    }

    return (
        <div className='product'>
            <div className='product-main'>
                <div className='product-photo'>
                    <img src={product.photo} alt='product'/>
                </div>
                <ProductsDesc name={product.name} shortDesc={product.description.short} features={product.features.short} /> 
            </div>
            <ProductPay price={product.price} inStock={product.inStock} id={product.id } />
        </div>
    )
}

export default ProductPage