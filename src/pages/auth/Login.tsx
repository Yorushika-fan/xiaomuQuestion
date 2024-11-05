import {Form, Input, Button, Card, Typography, Checkbox} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'

interface LoginForm {
    username: string
    password: string
    remember: boolean
}
const USERNAME_KEY = 'username'
const PASSWORD_KEY = 'password'

const rememberMe = (username: string, password: string) => {
    localStorage.setItem(USERNAME_KEY, username)
    localStorage.setItem(PASSWORD_KEY, password)
}

const forgetMe = () => {
    localStorage.removeItem(USERNAME_KEY)
    localStorage.removeItem(PASSWORD_KEY)
}
const getUserInfo = () => {
    return {
        username: localStorage.getItem(USERNAME_KEY),
        password: localStorage.getItem(PASSWORD_KEY)
    }
}
const Login = () => {
    const [form] = Form.useForm()

    const onFinish = (values: LoginForm) => {
        console.log('登录表单提交:', values)
        if (values.remember) {
            rememberMe(values.username, values.password)
        } else {
            forgetMe()
        }
    }
    useEffect(() => {
        const userInfo = getUserInfo()
        if (userInfo.username && userInfo.password) {
            form.setFieldsValue(userInfo)
        }
    }, [form])

    return (
        <div className="h-[calc(100vh-64px-64px)] flex items-center justify-center bg-gray-50">
            <Card className="w-full max-w-md">
                <Typography.Title level={2} className="text-center mb-8">
                    登录
                </Typography.Title>

                <Form initialValues={{remember: true}} form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item
                        name="username"
                        rules={[
                            {required: true, message: '请输入用户名'},
                            {type: 'string', min: 5, max: 30, message: '用户名长度在5-30个字符之间'},
                            {
                                pattern: /^[a-zA-Z0-9_-]{5,30}$/,
                                message: '用户名只能包含字母、数字、下划线、中划线'
                            }
                        ]}>
                        <Input prefix={<UserOutlined />} placeholder="用户名" size="large" />
                    </Form.Item>

                    <Form.Item name="password" rules={[{required: true, message: '请输入密码'}]}>
                        <Input.Password prefix={<LockOutlined />} placeholder="密码" size="large" />
                    </Form.Item>
                    {/* 记住密码 */}
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">
                            登录
                        </Button>
                    </Form.Item>

                    <div className="text-center">
                        <Typography.Link href="/register">没有账号？立即注册</Typography.Link>
                    </div>
                </Form>
            </Card>
        </div>
    )
}

export default Login
