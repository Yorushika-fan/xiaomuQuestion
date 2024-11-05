import {Form, Input, Button, Card, Typography} from 'antd'
import {UserOutlined, MailOutlined, LockOutlined} from '@ant-design/icons'
import axios from 'axios'

const Register = () => {
    const [form] = Form.useForm()

    const onFinish = (values: unknown) => {
        console.log('注册表单提交:', values)
    }

    useEffect(() => {
        axios.get('/mock/api/test').then(res => {
            console.log('注册页面加载', res.data)
        })
    }, [])

    return (
        <div className="h-[calc(100vh-64px-64px)] flex items-center justify-center bg-gray-50">
            <Card className="w-full max-w-md">
                <Typography.Title level={2} className="text-center mb-8">
                    注册新账号
                </Typography.Title>

                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item name="username" rules={[{required: true, message: '请输入用户名'}]}>
                        <Input prefix={<UserOutlined />} placeholder="用户名" size="large" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {required: true, message: '请输入邮箱'},
                            {type: 'email', message: '请输入有效的邮箱地址'}
                        ]}>
                        <Input prefix={<MailOutlined />} placeholder="邮箱地址" size="large" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {required: true, message: '请输入密码'},
                            {min: 6, message: '密码长度至少6位'}
                        ]}>
                        <Input.Password prefix={<LockOutlined />} placeholder="密码" size="large" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            {required: true, message: '请输入密码'},
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(new Error('两次输入的密码不一致'))
                                }
                            })
                        ]}>
                        <Input.Password prefix={<LockOutlined />} placeholder="确认密码" size="large" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">
                            注册
                        </Button>
                    </Form.Item>

                    <div className="text-center">
                        <Typography.Link href="/login">已有账号？立即登录</Typography.Link>
                    </div>
                </Form>
            </Card>
        </div>
    )
}

export default Register
