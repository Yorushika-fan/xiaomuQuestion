import {getQuestion} from '@/api'
import {useRequest} from 'ahooks'

const useLoadQuestionData = () => {
    const {id = ''} = useParams()
    const load = async () => {
        const data = await getQuestion(id)
        return data
    }
    return useRequest(load)
}

export default useLoadQuestionData
