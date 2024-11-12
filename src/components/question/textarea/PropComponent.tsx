import {Form, Input} from 'antd'
import {QuestionTextareaProps, QuestionTextareaDefaultProps} from './interface'

const PropComponent: React.FC<QuestionTextareaProps> = (props: QuestionTextareaProps) => {
    const {title, placeholder, disabled, onChange} = {
        ...QuestionTextareaDefaultProps,
        ...props
    }
    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue({title, placeholder})
    }, [title, placeholder])

    const handleValuesChange = () => {
        if (onChange) {
            onChange(form.getFieldsValue())
        }
    }

    return (
        <Form
            onValuesChange={handleValuesChange}
            form={form}
            layout="vertical"
            initialValues={{title, placeholder}}
            disabled={disabled}>
            <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
                <Input />
            </Form.Item>
            <Form.Item label="Placeholder" name="placeholder">
                <Input />
            </Form.Item>
        </Form>
    )
}

export default PropComponent
