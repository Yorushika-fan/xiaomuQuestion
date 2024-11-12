export type QuestionTextareaProps = {
    title?: string
    placeholder?: string
    disabled?: boolean
    onChange?: (newProps: QuestionTextareaProps) => void
}

export const QuestionTextareaDefaultProps: QuestionTextareaProps = {
    title: '输入框标题',
    placeholder: '请输入...'
}
