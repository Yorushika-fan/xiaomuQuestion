type QuestionCard = {
    id: string
    title: string
    isPublished: boolean
    isStar: boolean
    isDeleted: boolean
    answerCount: number
    createdAt: Date
}

type PageInfo<T> = {
    total: number
    rows: T[]
}

export type {QuestionCard, PageInfo}
