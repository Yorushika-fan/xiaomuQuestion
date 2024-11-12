import {Radio, Space, Typography} from 'antd'
import {QuestionRadioPropsType} from './interface'

const {Paragraph} = Typography
const RadioComponent: React.FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {
    const {title, options = [], isVertical, value} = {...QuestionRadioDefaultProps, ...props}

    console.log('props', props)
    return (
        <div>
            <Paragraph>{title}</Paragraph>
            <Radio.Group value={value}>
                <Space direction={isVertical ? 'vertical' : 'horizontal'}>
                    {options.map(opt => (
                        <Radio key={opt.value} value={opt.value}>
                            {opt.text}
                        </Radio>
                    ))}
                </Space>
            </Radio.Group>
        </div>
    )
}

export default RadioComponent
