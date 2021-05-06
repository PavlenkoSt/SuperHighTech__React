import pages from "../../../MobX/pages"
import { Checkbox } from 'antd'
import { FC } from "react"
import { SidebarOptionsType } from "../Sidebar"
import { CheckboxChangeEvent } from "antd/lib/checkbox"
import { RouteComponentProps, withRouter } from "react-router"

type OwnPropsType = {
    sidebarOptions: SidebarOptionsType
}

const Categories: FC<OwnPropsType & RouteComponentProps> = ({ sidebarOptions, location }) => {

    const onChange = (e: CheckboxChangeEvent) => {
        pages.setCategorySideFilteredOptions(e.target.value, e.target.checked)
    }

    const categoriesList = sidebarOptions.categories.map((category: string) => <div style={{height: 'auto', padding: '10px 0'}} key={category}>
            <Checkbox onChange={onChange} value={category} style={{color: 'rgba(255, 255, 255, 0.65)'}}>{category}</Checkbox>
        </div>)

    if(!sidebarOptions.categories.length || location.pathname === '/'){
        return null
    }

    return (
        <div style={{padding: '0 15px'}}>
            <div className='sidebar-header' style={{ marginBottom: '15px'}}>
                Категории
            </div>
            <div className='sidebar-inner'>
                {categoriesList}
            </div>
        </div>
    )
}

export default withRouter(Categories)