import { FC } from "react"
import Sort from "./Sort/Sort"
import './catalog.css'
import PaginationEl from "../common/Pagination/Pagination"


type CatalogPropsType = {
    header: string
    counter: number
    catalogItems: Array<any>
    total: number,
    animation: () => void
}


const Catalog: FC<CatalogPropsType> = ({ header, counter, catalogItems, total, animation }) => {
    
    return (
        <div>
            <div className='catalog-header'>
                <div className='catalog-header-main'>
                    <h2 className='catalog-title'>{ header }</h2>
                    <div className='catalog-counter'>{ counter }</div>
                </div>
                <Sort/>
            </div>
            <div className='catalog-container'>
                { catalogItems }
            </div>
            <PaginationEl total={total} animation={animation}/>
        </div>
    )
}

export default Catalog