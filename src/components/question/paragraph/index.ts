import ParagraphComponent from './Component'
import {ParagraphDefaultProps} from './interface'
import PropComponent from './PropComponent'

export * from './interface'
export default {
    title: '段落',
    type: 'questionParagraph',
    Component: ParagraphComponent,
    PropComponent: PropComponent,
    defaultProps: ParagraphDefaultProps
}
