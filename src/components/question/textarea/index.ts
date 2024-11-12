import QuestionTextarea from './Component'
import {QuestionTextareaDefaultProps} from './interface'
import PropComponent from './PropComponent'
export * from './interface'

export default {
    title: '多行输入',
    type: 'questionTextarea',
    Component: QuestionTextarea,
    PropComponent,
    defaultProps: QuestionTextareaDefaultProps
}
