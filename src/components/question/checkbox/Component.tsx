import {Checkbox, Space, Typography} from 'antd'
import {QuestionCheckboxDefaultProps, QuestionCheckboxPropsType} from './interface'

const {Paragraph} = Typography
const CheckboxComponent: React.FC<QuestionCheckboxPropsType> = (props: QuestionCheckboxPropsType) => {
    const {title, list = [], isVertical} = {...QuestionCheckboxDefaultProps, ...props}

    return (
        <div>
            <Paragraph>{title}</Paragraph>
            <Space direction={isVertical ? 'vertical' : 'horizontal'}>
                {list.map(opt => {
                    const {text, value, checked} = opt
                    return (
                        <Checkbox key={value} checked={checked} value={value}>
                            {text}
                        </Checkbox>
                    )
                })}
            </Space>
        </div>
    )
}

export default CheckboxComponent
