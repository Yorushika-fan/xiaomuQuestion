export type InfoPropsType = {
    title?: string
    desc?: string
    onChange?: (newProps: InfoPropsType) => void
    disabled?: boolean
}

export const InfoDefaultProps: InfoPropsType = {
    title: '问卷标题',
    desc: '问卷描述'
}
