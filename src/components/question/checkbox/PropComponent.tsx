import {Button, Checkbox, Form, Input, Space} from 'antd'
import {OptionType, QuestionCheckboxDefaultProps, QuestionCheckboxPropsType} from './interface'
import {useForm} from 'antd/es/form/Form'
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons'
import {nanoid} from 'nanoid'

const PropComponent: React.FC<QuestionCheckboxPropsType> = (props: QuestionCheckboxPropsType) => {
    const [form] = useForm()
    const {title, list, isVertical, onChange, disabled} = {
        ...QuestionCheckboxDefaultProps,
        ...props
    }

    const onValuesChange = () => {
        if (!onChange) return

        const newValues = form.getFieldsValue() as QuestionCheckboxPropsType

        if (newValues.list) {
            newValues.list = newValues.list.filter(opt => !(opt.text == null))
        }

        const {list = []} = newValues
        list.forEach(opt => {
            if (opt.value) return
            opt.value = nanoid()
        })
        onChange(newValues)
    }

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{title, list, isVertical}}
            disabled={disabled}
            onValuesChange={onValuesChange}>
            <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
                <Input />
            </Form.Item>
            <Form.Item label="选项">
                <Form.List name="list">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, index) => (
                                <Space key={field.key}>
                                    <Form.Item name={[field.name, 'checked']} valuePropName="checked">
                                        <Checkbox />
                                    </Form.Item>
                                    <Form.Item
                                        name={[field.name, 'text']}
                                        label="选项文字"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入选项文字'
                                            },
                                            {
                                                validator: (_, text) => {
                                                    const {list = []} = form.getFieldsValue()
                                                    let num = 0
                                                    list.forEach((opt: OptionType) => {
                                                        if (opt.text === text) {
                                                            num++
                                                        }
                                                    })
                                                    if (num === 1) {
                                                        return Promise.resolve()
                                                    }

                                                    return Promise.reject(new Error('选项文字不能重复'))
                                                }
                                            }
                                        ]}>
                                        <Input placeholder="请输入选项文字" />
                                    </Form.Item>
                                    {index > 0 && (
                                        <Button
                                            type="link"
                                            icon={<MinusCircleOutlined />}
                                            onClick={() => remove(field.name)}
                                            size="small"
                                        />
                                    )}
                                </Space>
                            ))}

                            <Form.Item>
                                <Button
                                    type="link"
                                    icon={<PlusOutlined />}
                                    onClick={() => add({text: '', value: '', checked: false})}
                                    block>
                                    添加选项
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form.Item>
            <Form.Item name="isVertical" valuePropName="checked">
                <Checkbox>垂直排列</Checkbox>
            </Form.Item>
        </Form>
    )
}

export default PropComponent
