import { Select } from 'antd';
import pages from '../../../MobX/pages';


const Sort = () => {
    const { Option } = Select;

    const handleChange = (value: any) => {
    console.log(`selected ${value}`);
        pages.setSideSortedOption(value)
    }

    return (
        <Select defaultValue="news" style={{ width: 200 }} onChange={handleChange}>
            <Option value="news">По новизне</Option>
            <Option value="decrease">По убыванию цены</Option>
            <Option value="increase">По возрастанию цены</Option>
        </Select>
    )
}

export default Sort