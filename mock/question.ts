import {MockMethod, Recordable} from 'vite-plugin-mock'
import {questionList} from './data'
// import {DEFAULT_CURRENT, DEFAULT_PAGE_SIZE} from '@/constants

export const questionMock = [
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
                createdAt: new Date().toISOString()
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
        response: () => {
            // const id = url.split('/').pop()
            return {
                code: 0,
                data: {
                    id: 1,
                    title: '11',
                    componentList: [
                        {
                            fe_id: 1,
                            type: 'questionTitle',
                            title: '12121',
                            isHidden: false,
                            props: {
                                title: '个人信息调研',
                                level: 1,
                                isCenter: false
                            }
                        },
                        {
                            fe_id: 2,
                            type: 'questionInput',
                            title: '你的名字',
                            isHidden: false,
                            props: {
                                title: '你的名字',
                                placeholder: '请输入你的名字'
                            }
                        },
                        {
                            fe_id: 3,
                            type: 'questionInput',
                            title: '你的电话',
                            isHidden: false,
                            props: {
                                title: '你的电话',
                                placeholder: '请输入你的电话'
                            }
                        },
                        {
                            fe_id: 4,
                            type: 'questionInfo',
                            title: '问卷信息',
                            isHidden: false,
                            props: {
                                title: '问卷标题',
                                desc: '问卷描述'
                            }
                        },
                        {
                            fe_id: 5,
                            type: 'questionParagraph',
                            title: '段落',
                            isHidden: false,
                            props: {
                                text: '一行段落',
                                isCenter: false
                            }
                        },
                        {
                            fe_id: 6,
                            type: 'questionRadio',
                            title: '单选',
                            isHidden: false,
                            props: {
                                title: '单选标题',
                                options: [
                                    {
                                        text: '选项一',
                                        value: 'item1'
                                    },
                                    {
                                        text: '选项二',
                                        value: 'item2'
                                    },
                                    {
                                        text: '选项三',
                                        value: 'item3'
                                    }
                                ],
                                value: ''
                            }
                        },
                        {
                            fe_id: 7,
                            type: 'questionCheckbox',
                            title: '多选',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '多选标题',
                                list: [
                                    {text: '选项一', value: 'item1', checked: false},
                                    {text: '选项二', value: 'item2', checked: false},
                                    {text: '选项三', value: 'item3', checked: false}
                                ],
                                isVertical: false
                            }
                        }
                    ],
                    answerCount: 0,
                    createdAt: '2024-11-09'
                }
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
    },
    {
        url: '/mock/api/question/:id',
        method: 'patch',
        response: () => {
            return {
                code: 0
            }
        }
    },
    {
        url: '/mock/api/question/duplicate/:id',
        method: 'post',
        response: () => {
            return {
                code: 0,
                data: questionList[Math.floor(Math.random() * questionList.length)]
            }
        }
    },
    {
        url: '/mock/api/question/delete',
        method: 'delete',
        response: () => {
            return {code: 0}
        }
    }
] as MockMethod[]
