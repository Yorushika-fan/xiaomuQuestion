import Card from '@/components/card'
import {Empty, Spin, Typography} from 'antd'
import {Input} from 'antd'
import {SearchProps} from 'antd/es/input'
// import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
import {LIST_SEARCH_PARAM_KEY} from '@/constants'
import {useSearchParams} from 'react-router-dom'
import {useDebounceFn, useRequest} from 'ahooks'
import {QuestionCard} from '@/types'

const {Search} = Input
const List = () => {
    const {Title} = Typography
    const [page, setPage] = useState(DEFAULT_CURRENT)
    const [list, setList] = useState<QuestionCard[]>([])
    const [total, setTotal] = useState(0)
    const [started, setStared] = useState(false)
    const haveMoreData = total > list.length
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    const onSearch: SearchProps['onSearch'] = value => {
        setSearchParams({[LIST_SEARCH_PARAM_KEY]: value})
    }

    const containerRef = useRef<HTMLDivElement>(null)
    const {run: load, loading} = useRequest(
        async () => {
            const data = await getQuestionList({
                page,
                pageSize: DEFAULT_PAGE_SIZE,
                keyword: keyword
            })
            return data
        },
        {
            manual: true,
            onSuccess: data => {
                const {rows = [], total = 0} = data.data
                setList(list.concat(rows))
                setTotal(total)
                setPage(page + 1)
            }
        }
    )
    const {run: tyrLoadMore} = useDebounceFn(
        () => {
            const elem = containerRef.current
            if (elem == null) return
            const domRect = elem.getBoundingClientRect()
            if (domRect == null) return
            const {bottom} = domRect
            if (bottom <= document.body.clientHeight) {
                load()
                setStared(true)
            }
        },
        {
            wait: 1000
        }
    )

    useEffect(() => {
        setStared(false)
        setPage(DEFAULT_CURRENT)
        setList([])
        setTotal(0)
    }, [keyword])

    useEffect(() => {
        tyrLoadMore()
    }, [searchParams])

    useEffect(() => {
        if (haveMoreData) {
            window.addEventListener('scroll', tyrLoadMore)
        }

        return () => {
            window.removeEventListener('scroll', tyrLoadMore)
        }
    }, [searchParams, haveMoreData])

    const LoadMoreContentElem = () => {
        if (!started || loading) return <Spin tip="加载中..." />
        if (total === 0) return <Empty description="暂无数据" />
        if (!haveMoreData) return <div>没有更多了</div>
        return <span>开始加载</span>
    }
    return (
        <>
            <div className="flex justify-between items-center">
                <Title level={3}>问卷列表</Title>
                <Search placeholder="请输入关键字" size="large" allowClear onSearch={onSearch} style={{width: 200}} />
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto" style={{maxHeight: '80vh'}}>
                {list.map(card => (
                    <Card key={card.id} {...card} />
                ))}
                <div ref={containerRef} className="flex justify-center items-center py-4">
                    <LoadMoreContentElem />
                </div>
            </div>
        </>
    )
}

export default List
