import { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import products from "../../../MobX/products"
import CatalogItem from "../../Catalog/CatalogItem/CatalogItem";

const SuperPrice: FC<RouteComponentProps> = ({ location }) => {

    const productsEls = products.getProductsForMainPage()

    const items = productsEls.map((product: any) => <CatalogItem 
        key={product.id} 
        name={product.name} 
        price={product.price}
        photo={product.photo}
        path={location.pathname}
        url={product.url}
    />)
    
    return (
        <div>
            <h2 className='main-header'>Суперцена</h2>
            <div className='catalog-container'>
                {items}
            </div>
        </div>
    )
}

export default withRouter(SuperPrice)