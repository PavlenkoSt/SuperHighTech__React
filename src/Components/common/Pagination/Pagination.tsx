import { Pagination } from 'antd'
import { FC } from 'react'
import pages from '../../../MobX/pages'

type PaginationType = {
    total: number,
    animation: () => void
}

const PaginationEl: FC<PaginationType> = ({ total, animation }) => {

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

export default PaginationEl