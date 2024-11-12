export type OptionType = {
    text: string
    value: string
    checked?: boolean
}

export type QuestionCheckboxPropsType = {
    title?: string
    isVertical?: boolean
    list?: OptionType[]
    value?: string
    onChange?: (newProps: QuestionCheckboxPropsType) => void
    disabled?: boolean
}

export const QuestionCheckboxDefaultProps: QuestionCheckboxPropsType = {
    title: '多选标题',
    isVertical: false,
    list: [
        {
            text: '选项一',
            value: 'item1',
            checked: false
        },
        {
            text: '选项二',
            value: 'item2',
            checked: false
        },
        {
            text: '选项三',
            value: 'item3',
            checked: false
        }
    ],
    value: '',
    disabled: false
}
