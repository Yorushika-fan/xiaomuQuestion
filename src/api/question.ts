import http from '@/utils/request'
import {PageInfo, QuestionCard} from '@/types'
import {ComponentInfoType} from '@/store/componentsReducer'
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
    return http.get<{
        id: string
        title: string
        componentList: ComponentInfoType[]
    }>(`/mock/api/question/${id}`)
}

const getQuestionList = (options: Partial<searchOptions>) => {
    return http.get<PageInfo<QuestionCard>>('/mock/api/questions', options)
}

const updateQuestion = (id: string, options: {[key: string]: unknown}) => {
    return http.patch(`/mock/api/question/${id}`, options)
}

const duplicateQuestion = (id: string) => {
    return http.post<QuestionCard>(`/mock/api/question/duplicate/${id}`)
}

const deleteQuestion = (ids: string[]) => {
    console.log(ids)
    return http.remove(`/mock/api/question/delete`, ids)
}

export {createQuestion, getQuestionList, getQuestion, updateQuestion, duplicateQuestion, deleteQuestion}
