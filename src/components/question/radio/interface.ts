export type OptionType = {
    text: string
    value: string
}

export type QuestionRadioPropsType = {
    title?: string
    isVertical?: boolean
    isDisabled?: boolean
    options?: OptionType[]
    value?: string
    onChange?: (newProps: QuestionRadioPropsType) => void
}

export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
    title: '单选标题',
    isVertical: false,
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
