import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

const BreadcrumbElem = (routes:any) => {
    
    function itemRender(route: any, params: any, routes: any, paths: any) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
            <NavLink to={paths.join('/')}>{route.breadcrumbName}</NavLink>
        );
        }
        
    return <Breadcrumb itemRender={itemRender} routes={routes} />;
}

export default BreadcrumbElem