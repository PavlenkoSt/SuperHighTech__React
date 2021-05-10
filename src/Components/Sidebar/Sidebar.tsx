import { Menu } from 'antd'
import {
  AppstoreOutlined,
  PieChartOutlined,
  SearchOutlined
} from '@ant-design/icons'
import SliderEl from './Slider/Slider'
import './sidebar.css'
import Categories from './Categories/Categories'
import { FC } from 'react'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'
import Search from '../Header/Search/Search'

export type SidebarOptionsType = {
    categories: Array<string>
}

type OwnPropsType = {
    sidebarOptions: SidebarOptionsType
}

const Sidebar: FC<RouteComponentProps & OwnPropsType> = ({ sidebarOptions, location }) => {
    const { SubMenu } = Menu

    const searchSearch = location.pathname.match(/\/(search)\/(.+)/)
    const isSearchPage = searchSearch && searchSearch[1] === 'search'
    const isMainPage = location.pathname === '/'
    const searchCart = location.pathname.match(/\/(cart)/)
    const isCartPage = searchCart && searchCart[1] === 'cart'

    return (
        <div className={`sideMenu small`}>
            <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={true}
            >
                <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Кабинет">
                    <NavLink className='sidebar-link' to='/'>На главную</NavLink>
                    <NavLink className='sidebar-link' to='/cart'>Корзина</NavLink>
                </SubMenu>
            { (isSearchPage || isMainPage || isCartPage) ? null : (
                <SubMenu key="sub2" icon={<PieChartOutlined />} title="Фильтры">
                    <SliderEl/>
                    <Categories sidebarOptions={sidebarOptions} />
                </SubMenu>
            )}   
                <SubMenu key="sub3" icon={<SearchOutlined />} title="Поиск" className='search-submenu' >
                    <Search/>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default withRouter(Sidebar)