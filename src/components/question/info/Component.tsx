import {FC} from 'react'
import {InfoPropsType} from './interface'
import {Typography} from 'antd'

const {Title, Paragraph} = Typography

const Component: FC<InfoPropsType> = (props: InfoPropsType) => {
    const {title, desc = ''} = {...InfoDefaultProps, ...props}

    const formattedDesc = desc.split('\n').map((line, index, array) => (
        <span key={index}>
            {line}
            {index < array.length - 1 && <br />}
        </span>
    ))

    return (
        <div className="text-center">
            <Title className="text-xl">{title}</Title>
            <Paragraph className="text-sm">{formattedDesc}</Paragraph>
        </div>
    )
}

export default Component
