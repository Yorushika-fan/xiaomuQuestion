import {FormOutlined} from '@ant-design/icons'
import {Space, Typography} from 'antd'

const {Title} = Typography

const Logo = () => {
    return (
        <Link to="/">
            <Space>
                <Title className="!text-white">
                    <FormOutlined />
                </Title>
                <Title className="!text-white">小慕问卷</Title>
            </Space>
        </Link>
    )
}

export default Logo
