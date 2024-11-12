import {QuestionTitleDefaultProps, QuestionTitleProps} from './interface'
import {Typography} from 'antd'

const {Title} = Typography

const QuestionTitle: React.FC<QuestionTitleProps> = props => {
    const {title = '', level = 1, isCenter = false} = {...QuestionTitleDefaultProps, ...props}

    const getFontSize = (level: number) => {
        if (level === 1) return '24px'
        if (level === 2) return '20px'
        if (level === 3) return '16px'
        return '16px'
    }

    return (
        <div>
            <Title
                level={level}
                className="font-bold"
                style={{
                    textAlign: isCenter ? 'center' : 'left',
                    fontSize: getFontSize(level)
                }}>
                {title}
            </Title>
        </div>
    )
}

export default QuestionTitle
