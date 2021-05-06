import header from "../MobX/header"

type RouteForBreadcrumbsType = {
    breadcrumbName: string
    path: string
}

export default function generateBreadcrumbsLinks(pathAdress: any, breadcrumbValue: Array<RouteForBreadcrumbsType> = []):Array<RouteForBreadcrumbsType>{
    let path = pathAdress
    const withSearch = pathAdress ? pathAdress.match(/\/search/g) : []
    const breadcrumbs: Array<RouteForBreadcrumbsType> | Array<never> = breadcrumbValue

    if(path){
        const lostNum = path.lastIndexOf('/')
        let pathWithoutLost: string | null

        if(lostNum){
            pathWithoutLost = path.substr(lostNum)
            path = path.substr(0, lostNum)
        }else{
            pathWithoutLost = path
            path = null
        }

        if(pathWithoutLost && pathWithoutLost !== '/'){
            const headerRout = header.items.find((obj) => obj.link === pathWithoutLost )
            if(headerRout){
                if(withSearch && withSearch.length){
                    breadcrumbs.push({ path: headerRout.link, breadcrumbName: headerRout.name })
                }else{
                    breadcrumbs.push({ path: '/' + headerRout.link, breadcrumbName: headerRout.name })
                }
            }else{
                if(pathWithoutLost === '/search'){
                    breadcrumbs.push({ path: '/' + pathWithoutLost, breadcrumbName: 'Поиск' })
                }else{
                    const name = pathWithoutLost.substr(pathWithoutLost.lastIndexOf('/') + 1)
                    breadcrumbs.push({ path: pathWithoutLost, breadcrumbName: name[0].toUpperCase() + name.substr(1) })
                }
            }
            return generateBreadcrumbsLinks(path, breadcrumbs)
        }
    }else{
        breadcrumbs.push({ path: '', breadcrumbName: 'Главная' })
    }
    return breadcrumbs.reverse()
}