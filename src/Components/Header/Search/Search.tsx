import { Input, Space } from 'antd'
import { FC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

const Search: FC<RouteComponentProps> = ({history}) => {

    const { Search } = Input
    const onSearch = (value: string) => {
       if(value){
            history.push(`/search/${value}`)
       }
    }

    return (
        <Space direction="vertical">
            <Search placeholder="Поиск" enterButton onSearch={onSearch} />
        </Space>
    )
}


export default withRouter(Search)