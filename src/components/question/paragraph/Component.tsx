import {FC} from 'react'
import {ParagraphPropsType} from './interface'
import {Typography} from 'antd'

const {Paragraph} = Typography

const ParagraphComponent: FC<ParagraphPropsType> = (props: ParagraphPropsType) => {
    const {title, isCenter} = {...ParagraphDefaultProps, ...props}
    return <Paragraph style={{textAlign: isCenter ? 'center' : 'left'}}>{title}</Paragraph>
}

export default ParagraphComponent
