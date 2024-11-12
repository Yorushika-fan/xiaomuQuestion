import {Input, Typography} from 'antd'
import {QuestionTextareaProps} from './interface'

const {Paragraph} = Typography
const {TextArea} = Input
const QuestionTextarea: React.FC<QuestionTextareaProps> = props => {
    const {title = '', placeholder = ''} = {
        ...QuestionTextareaDefaultProps,
        ...props
    }
    return (
        <div>
            <Paragraph strong>{title}</Paragraph>
            <div>
                <TextArea placeholder={placeholder} />
            </div>
        </div>
    )
}
export default QuestionTextarea
