import { observer } from "mobx-react-lite"
import { FC, useEffect, useState } from "react"
import { HashRouter, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'
import Header from "./Components/Header/Header"
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import CatalogContainer from "./Components/Catalog/CatalogContainer"
import generateBreadcrumbsLinks from "./helpers/generateBreadcrumbsLinks"
import BreadcrumbElem from "./Components/common/Breadcrumb/Breadcrumb"
import header from "./MobX/header"
import Sidebar from "./Components/Sidebar/Sidebar"
import pages from "./MobX/pages"
import SearchPage from "./Components/SearchPage/SearchPage"
import Main from "./Components/Main/Main"
import { Footer } from "antd/lib/layout/layout"
import Preloader from "./Components/common/Preloader/Preloader"



const App: FC<RouteComponentProps> = observer(({location}) => {
  
    const links = header.items.map(item => item.link)

    const { Content } = Layout

    const sidebarOptions = {
        categories: pages.getCategoriesProducts()
    }

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setLoader(false)
    }, [])

    useEffect(() => {
        sidebarOptions.categories = pages.getCategoriesProducts() 
        pages.clearFilteredOption()

        const a = document.querySelectorAll('.ant-checkbox-checked')
        //@ts-ignore
        a.forEach(el => el.click())

    }, [location.pathname])

    if(loader){
        return <Preloader/>
    }

    return (
        <>
            <Header/>
            <Layout>
                <Sidebar sidebarOptions={sidebarOptions}/>
                <Content style={{padding: '0 15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                        { BreadcrumbElem(generateBreadcrumbsLinks(location.pathname))  }
                        <Switch>
                            <Route path={links} component={CatalogContainer} />
                            <Route path='/search' component={SearchPage} />
                            <Route path='/' component={Main} />
                        </Switch>
                    </div>
                    <Footer className='footer'>Copyright 2021 © Super High Tech Online Store © All Rights Reserved</Footer>
                </Content>
            </Layout>
        </>
    );
})

const AppWithRouter = withRouter(App)

export default () => {
    return (
        <HashRouter>
            <AppWithRouter/>
        </HashRouter>
    )
}