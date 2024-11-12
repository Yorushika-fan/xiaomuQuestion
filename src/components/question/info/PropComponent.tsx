import {FC} from 'react'
import {Form, Input} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import {InfoDefaultProps, InfoPropsType} from './interface'
const PropComponent: FC<InfoPropsType> = (props: InfoPropsType) => {
    const {title, desc, onChange, disabled} = {...InfoDefaultProps, ...props}

    const [form] = Form.useForm()
    const handlePageChange = () => {
        if (onChange) {
            onChange(form.getFieldsValue())
        }
    }
    useEffect(() => {
        form.setFieldsValue({title, desc})
    }, [title, desc])
    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{title, desc}}
            onValuesChange={handlePageChange}
            disabled={disabled}>
            <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
                <Input />
            </Form.Item>
            <Form.Item label="描述" name="desc">
                <TextArea />
            </Form.Item>
        </Form>
    )
}

export default PropComponent
