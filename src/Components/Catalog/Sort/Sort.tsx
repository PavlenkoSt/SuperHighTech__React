import { Select } from 'antd';
import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import pages from '../../../MobX/pages';


const Sort: FC<RouteComponentProps> = ({ location }) => {
    const { Option } = Select;

    const handleChange = (value: any) => {
        pages.setSideSortedOption(value)
    }

    const searchSearch = location.pathname.match(/\/(search)\/(.+)/)

    if(searchSearch && searchSearch[1] === 'search'){
        return null
    }

    return (
        <Select defaultValue="news" style={{ width: 200 }} onChange={handleChange}>
            <Option value="news">По новизне</Option>
            <Option value="decrease">По убыванию цены</Option>
            <Option value="increase">По возрастанию цены</Option>
        </Select>
    )
}

export default withRouter(Sort)