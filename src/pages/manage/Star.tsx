import {Empty, Input, Pagination, PaginationProps, Spin, Typography} from 'antd'
import Card from '@/components/card'
import {SearchProps} from 'antd/es/input'
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
import {DEFAULT_CURRENT, DEFAULT_PAGE_SIZE, PAGE_PARAM_KEY} from '@/constants'
const {Title} = Typography
const {Search} = Input
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)
const Star = () => {
    const [current, setCurrent] = useState(DEFAULT_CURRENT)
    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
    const {data, loading} = useLoadQuestionListData({
        isStar: true,
        page: current,
        pageSize
    })
    const [, setSearchParams] = useSearchParams()

    const onChange: PaginationProps['onChange'] = (pageNumber, pageSize) => {
        setCurrent(pageNumber)
        setPageSize(pageSize)
        setSearchParams({
            [PAGE_PARAM_KEY]: pageNumber.toString(),
            [PAGE_SIZE_PARAM_KEY]: pageSize.toString()
        })
    }
    return (
        <>
            <div className="flex justify-between items-center">
                <Title level={3}>星标问卷</Title>
                <Search placeholder="请输入关键字" size="large" allowClear onSearch={onSearch} style={{width: 200}} />
            </div>
            {data?.rows.length === 0 && <Empty description="暂无数据" />}
            <Spin spinning={loading}>
                <div className="flex flex-col gap-4">{data?.rows.map(c => <Card key={c.id} {...c} />)}</div>
            </Spin>
            <Pagination
                current={current}
                pageSize={pageSize}
                showQuickJumper
                showTotal={total => `共 ${total} 条`}
                defaultPageSize={DEFAULT_PAGE_SIZE}
                defaultCurrent={DEFAULT_CURRENT}
                total={data?.total}
                onChange={onChange}
                onShowSizeChange={setPageSize}
            />
        </>
    )
}

export default Star
