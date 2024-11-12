export type QuestionTitleProps = {
    title?: string
    level?: 1 | 2 | 3
    isCenter?: boolean
    disabled?: boolean
    onChange?: (newProps: QuestionTitleProps) => void
}

export const QuestionTitleDefaultProps: QuestionTitleProps = {
    title: '一行标题',
    level: 1,
    isCenter: false
}
