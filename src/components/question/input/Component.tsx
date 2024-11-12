import {QuestionInputDefaultProps, QuestionInputProps} from './interface'

import {Input, Typography} from 'antd'

const {Paragraph} = Typography

const QuestionInput: React.FC<QuestionInputProps> = props => {
    const {title = '', placeholder = ''} = {
        ...QuestionInputDefaultProps,
        ...props
    }
    return (
        <div>
            <Paragraph strong>{title}</Paragraph>
            <div>
                <Input placeholder={placeholder} />
            </div>
        </div>
    )
}
export default QuestionInput
