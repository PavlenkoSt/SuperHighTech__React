import { Pagination } from 'antd'
import { FC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import pages from '../../../MobX/pages'

type PaginationType = {
    total: number,
    animation: () => void
}

const PaginationEl: FC<PaginationType & RouteComponentProps> = ({ total, animation, location }) => {

    const searchSearch = location.pathname.match(/\/(search)/)
    const isSearchPage = searchSearch && searchSearch[1] === 'search'

    if(isSearchPage){
        return null
    }

    const onChange = (num: number) => {
        animation()
        pages.setCurrentPage(num) 
    }

    return (
        <div style={{paddingTop: '20px', display: 'flex', justifyContent: 'center'}}>
            <Pagination defaultCurrent={1} onChange={onChange} total={total} showSizeChanger={false} pageSize={8} />
        </div>
    )
}

export default withRouter(PaginationEl)