import {useParams} from 'react-router-dom'
import {useRequest} from 'ahooks'
import {getQuestion} from '@/api'
import {useDispatch} from 'react-redux'

const useLoadQuestionData = () => {
    const dispatch = useDispatch()
    const {id = ''} = useParams()
    const {data, loading, error, run} = useRequest(
        async (id: string) => {
            if (!id) throw new Error('没有问卷id')
            const data = await getQuestion(id)
            return data
        },
        {
            manual: true
        }
    )

    useEffect(() => {
        if (!data) return
        const {componentList} = data.data
        const [firstComponent] = componentList
        const selectedId = firstComponent?.fe_id || ''
        dispatch(resetComponents({componentList, selectedId}))
    }, [data])

    useEffect(() => {
        run(id)
    }, [id])
    return {loading, error}
}

export default useLoadQuestionData
