import {FC} from 'react'
import {ParagraphPropsType} from './interface'
import {Checkbox, Form, Input} from 'antd'

const {TextArea} = Input

const PropComponent: FC<ParagraphPropsType> = (props: ParagraphPropsType) => {
    const {text, isCenter, onChange, disabled} = props

    const [form] = Form.useForm()
    const onValuesChange = () => {
        if (onChange) {
            onChange(form.getFieldsValue())
        }
    }
    useEffect(() => {
        form.setFieldsValue({text, isCenter})
    }, [text, isCenter])
    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{text, isCenter}}
            onValuesChange={onValuesChange}
            disabled={disabled}>
            <Form.Item label="段落内容" name="text" rules={[{required: true, message: '请输入段落内容'}]}>
                <TextArea />
            </Form.Item>

            <Form.Item name="isCenter" valuePropName="checked">
                <Checkbox>居中显示</Checkbox>
            </Form.Item>
        </Form>
    )
}

export default PropComponent
