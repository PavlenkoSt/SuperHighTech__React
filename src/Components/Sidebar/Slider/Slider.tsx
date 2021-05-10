import { Slider } from 'antd'
import { FC } from 'react'
import { useEffect, useState } from 'react'
import pages from '../../../MobX/pages'
import products from '../../../MobX/products'

type OwnPropsType = {
}

const SliderEl: FC<OwnPropsType> = () => {

    const [minActive, setMinActive] = useState(0)
    const [maxActive, setMaxActive] = useState(products.maxPriceOfProducts)

    const changeSlider = (value: Array<number>) => {
        setMinActive(value[0])
        setMaxActive(value[1])
        pages.setPriceSideFilteredOptions(value)
    }

    const [maxPrice, setMaxPrice] = useState(products.maxPriceOfProducts)

    useEffect(() => {
        setMaxPrice(products.maxPriceOfProducts)
    }, [])

    return (
        <div style={{padding: '25px 15px'}}>
            <div className='sidebar-header'>Цена</div>
            <div className='sidebar-inner'>
                {`${minActive},00 грн`} - {`${maxActive},00 грн`} 
            </div>
            <Slider onChange={changeSlider} range={{ draggableTrack: true }} defaultValue={[0, maxPrice]} max={maxPrice} />
        </div>
    )
}

export default SliderEl