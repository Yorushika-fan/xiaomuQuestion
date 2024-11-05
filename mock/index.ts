import {MockMethod, Recordable} from 'vite-plugin-mock'
import {questionList} from './data'
// import {DEFAULT_CURRENT, DEFAULT_PAGE_SIZE} from '@/constants'

export default [
    {
        url: '/mock/api/question',
        method: 'post',
        response: () => {
            const newQuestion = {
                id: `q${questionList.length + 1}`,
                title: `第${questionList.length + 1}个问题`,
                isPublished: false,
                isStar: false,
                answerCount: 0,
                isDeleted: false,
                createdAt: new Date()
            }
            questionList.push(newQuestion)
            return {
                code: 0,
                data: newQuestion
            }
        }
    },
    {
        url: '/mock/api/question/:id',
        method: 'get',
        response: ({url}: {url: string}) => {
            const id = url.split('/').pop()
            return {
                code: 0,
                data: questionList.find(q => q.id === id)
            }
        }
    },
    {
        url: '/mock/api/questions',
        method: 'get',
        response: (request: Recordable) => {
            const {keyword, isStar, isDeleted, page = 1, pageSize = 10} = request.query
            // 过滤

            const res = questionList
                .filter(q => (keyword !== '' ? q.title.includes(keyword) : true))
                .filter(q => (isDeleted ? q.isDeleted : !q.isDeleted))
                .filter(q => (isStar ? q.isStar : true))

            // 分页
            const startIndex = (page - 1) * pageSize
            const endIndex = startIndex + parseInt(pageSize)
            console.log(startIndex, endIndex)
            const rows = res.slice(startIndex, endIndex)
            console.log('res', res.length)
            console.log('rows', rows.length)
            return {
                code: 0,
                data: {
                    rows,
                    total: res.length
                }
            }
        }
    },
    {
        url: '/mock/api/test',
        method: 'get',
        response: () => {
            return {
                code: 0,
                data: 'test'
            }
        }
    }
] as MockMethod[]
