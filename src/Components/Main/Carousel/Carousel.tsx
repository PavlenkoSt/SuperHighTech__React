import { Carousel } from 'antd'
import i1 from '../../../assets/main/1.jpeg'
import i2 from '../../../assets/main/2.jpg'
import i3 from '../../../assets/main/3.jpg'

const CarouselEl = () => {
    const contentStyle: any = {
        color: '#fff',
        textAlign: 'center',
        background: '#364d79',
        overflow: 'hidden'
    } 
    
    return (
        <div className='main-carousel'>
            <Carousel autoplay autoplaySpeed={3000} speed={500} dotPosition='top'>
                <div className='main-slide'>
                    <img className='main-img' src={i1} alt='iPhone' />
                </div>
                <div className='main-slide'>
                    <img className='main-img' src={i2} alt='iPhone' />
                </div>
                <div className='main-slide'>
                    <img className='main-img' src={i3} alt='iPhone' />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselEl