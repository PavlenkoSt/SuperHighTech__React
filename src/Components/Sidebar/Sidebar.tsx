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
import { NavLink } from 'react-router-dom'
import Search from '../Header/Search/Search'

export type SidebarOptionsType = {
    categories: Array<string>
}

type OwnPropsType = {
    sidebarOptions: SidebarOptionsType
}

const Sidebar: FC<OwnPropsType> = ({ sidebarOptions }) => {
    const { SubMenu } = Menu

    return (
        <div className={`sideMenu small`}>
            <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={true}
            >
                <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Кабинет">
                    <NavLink className='sidebar-link' to='/'>Вход | Регистрация</NavLink>
                    <NavLink className='sidebar-link' to='/'>На главную</NavLink>
                </SubMenu>
                <SubMenu key="sub2" icon={<PieChartOutlined />} title="Фильтры">
                    <SliderEl/>
                    <Categories sidebarOptions={sidebarOptions} />
                </SubMenu>
                <SubMenu key="sub3" icon={<SearchOutlined />} title="Поиск" className='search-submenu' >
                    <Search/>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default Sidebar