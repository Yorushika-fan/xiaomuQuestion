import QuestionInputConf, {QuestionInputProps} from './input'
import QuestionTitleConf, {QuestionTitleProps} from './title'
import QuestionParagraphConf, {ParagraphPropsType} from './paragraph'
import QuestionInfoConf, {InfoPropsType} from './info'
import QuestionTextareaConf, {QuestionTextareaProps} from './textarea'
import QuestionRadioConf, {QuestionRadioPropsType} from './radio'
import QuestionCheckboxConf, {QuestionCheckboxPropsType} from './checkbox'
export type ComponentPropsType = QuestionTitleProps &
    QuestionInputProps &
    ParagraphPropsType &
    InfoPropsType &
    QuestionTextareaProps &
    QuestionRadioPropsType &
    QuestionCheckboxPropsType

export type ComponentConfType = {
    title: string
    type: string
    Component: React.FC<ComponentPropsType>
    PropComponent: React.FC<ComponentPropsType>
    defaultProps: ComponentPropsType
}

const componentConfList: ComponentConfType[] = [
    QuestionTitleConf,
    QuestionInputConf,
    QuestionParagraphConf,
    QuestionInfoConf,
    QuestionTextareaConf,
    QuestionRadioConf,
    QuestionCheckboxConf
]

const getComponentConfByType = (type: string) => componentConfList.find(c => c.type === type)

//分组
export const componentConfGroup = [
    {
        groupId: 'textGroup',
        groupName: '文本显示',
        components: [QuestionTitleConf, QuestionParagraphConf]
    },
    {
        groupId: 'inputGroup',
        groupName: '用户输入',
        components: [QuestionInputConf, QuestionTextareaConf]
    },
    {
        groupId: 'infoGroup',
        groupName: '问卷信息',
        components: [QuestionInfoConf]
    },
    {
        groupId: 'chooseGroup',
        groupName: '用户选择',
        components: [QuestionRadioConf, QuestionCheckboxConf]
    }
]

export default getComponentConfByType
