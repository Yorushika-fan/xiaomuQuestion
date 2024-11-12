import {useRequest} from 'ahooks'
import {LIST_SEARCH_PARAM_KEY, PAGE_PARAM_KEY, PAGE_SIZE_PARAM_KEY} from '@/constants'
import {searchOptions} from '@/api/question'
const useLoadQuestionListData = (options?: Partial<searchOptions>) => {
    const [searchParams] = useSearchParams()
    const {isStar = false, isDeleted = false} = options || {}

    const {data, loading, error, refresh} = useRequest(
        async () => {
            const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
            const page = parseInt(searchParams.get(PAGE_PARAM_KEY) || '') || DEFAULT_CURRENT
            const pageSize = parseInt(searchParams.get(PAGE_SIZE_PARAM_KEY) || '') || DEFAULT_PAGE_SIZE
            const res = await getQuestionList({
                keyword,
                isStar,
                isDeleted,
                page,
                pageSize
            })
            return res.data
        },
        {
            refreshDeps: [searchParams]
        }
    )
    return {data, loading, error, refresh}
}
export default useLoadQuestionListData
