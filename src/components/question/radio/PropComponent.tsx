import {Form, Input, Checkbox, Button, Space, Select} from 'antd'
import {QuestionRadioPropsType, QuestionRadioDefaultProps, OptionType} from './interface'
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons'
import {nanoid} from 'nanoid'

const PropComponent: React.FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {
    const {title, options, isVertical, isDisabled, onChange, value} = {
        ...QuestionRadioDefaultProps,
        ...props
    }
    const [form] = Form.useForm()

    const onValuesChange = () => {
        if (!onChange) return

        const newValues = form.getFieldsValue() as QuestionRadioPropsType
        const {options = []} = newValues

        options.forEach(opt => {
            if (opt.value) return
            opt.value = nanoid()
        })

        onChange(newValues)
    }

    useEffect(() => {
        form.setFieldsValue({title, options, value, isVertical})
    }, [title, options, value, isVertical])

    return (
        <Form
            layout="vertical"
            initialValues={{title, options, value, isVertical}}
            onValuesChange={onValuesChange}
            disabled={isDisabled}
            form={form}>
            <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
                <Input />
            </Form.Item>
            <Form.Item label="选项">
                <Form.List name="options">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, index) => (
                                <Space key={field.key}>
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
                                                    const {options = []} = form.getFieldsValue()
                                                    let num = 0
                                                    options.forEach((opt: OptionType) => {
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
                                    {index > 1 && (
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
                                    onClick={() => add({text: '', value: ''})}
                                    block>
                                    添加选项
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form.Item>
            <Form.Item label="默认选中" name="value">
                <Select
                    value={value}
                    allowClear
                    options={options?.map(opt => ({
                        label: opt.text,
                        value: opt.value
                    }))}
                />
            </Form.Item>
            <Form.Item name="isVertical" valuePropName="checked">
                <Checkbox>竖向排列</Checkbox>
            </Form.Item>
        </Form>
    )
}

export default PropComponent
