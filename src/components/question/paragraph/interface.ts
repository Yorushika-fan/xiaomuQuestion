export type ParagraphPropsType = {
    title?: string
    text?: string
    isCenter?: boolean
    onChange?: (newProps: ParagraphPropsType) => void
    disabled?: boolean
}

export const ParagraphDefaultProps: ParagraphPropsType = {
    title: '一行段落',
    isCenter: false
}
