import { Layout, Menu } from 'antd'
import { FC } from "react"
import { RouteComponentProps, withRouter } from 'react-router-dom'
import header from '../../MobX/header'
import HeaderItem from './HeaderItem/HeaderItem'
import Search from './Search/Search'

type HeaderPropsType = RouteComponentProps

const Header: FC<HeaderPropsType> = ( { location } ) => {

    const { Header } = Layout

    return (
        <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname]}>
                { header.items.map((navItem) => <Menu.Item key={navItem.link}><HeaderItem link={navItem.link} name={navItem.name} /></Menu.Item>) }
            </Menu>
            <Search/>
        </Header>
    )
}

export default withRouter(Header)