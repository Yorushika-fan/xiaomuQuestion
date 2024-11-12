import {Checkbox, Form, Input, Select} from 'antd'
import {QuestionTitleProps} from './interface'

const PropComponent: React.FC<QuestionTitleProps> = (props: QuestionTitleProps) => {
    const {level, title, isCenter, disabled, onChange} = props

    const levelList = [
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3}
    ]
    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue({level, title, isCenter})
    }, [level, title, isCenter])
    const handleValuesChange = () => {
        if (onChange) {
            onChange(form.getFieldsValue())
        }
    }
    return (
        <Form
            form={form}
            onValuesChange={handleValuesChange}
            layout="vertical"
            initialValues={{level, title, isCenter}}
            disabled={disabled}>
            <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
                <Input />
            </Form.Item>
            <Form.Item label="层级" name="level">
                <Select options={levelList}></Select>
            </Form.Item>
            <Form.Item name="isCenter" valuePropName="checked">
                <Checkbox>居中显示</Checkbox>
            </Form.Item>
        </Form>
    )
}
export default PropComponent
