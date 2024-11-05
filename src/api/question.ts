import http from '@/utils/request'
import {PageInfo, QuestionCard} from '@/types'
export type searchOptions = {
    keyword?: string
    isStar?: boolean
    isDeleted?: boolean
    pageSize?: number
    page?: number
}
/**
 * 创建问卷
 * @returns 问卷信息
 */
const createQuestion = () => {
    return http.post<QuestionCard>('/mock/api/question')
}

const getQuestion = (id: string) => {
    return http.get<QuestionCard>(`/mock/api/question/${id}`)
}

const getQuestionList = (options: Partial<searchOptions>) => {
    return http.get<PageInfo<QuestionCard>>('/mock/api/questions', options)
}

export {createQuestion, getQuestionList, getQuestion}
