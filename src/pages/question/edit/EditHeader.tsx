import {LeftOutlined} from '@ant-design/icons'
import {Button, Space, Typography} from 'antd'
import {useNavigate} from 'react-router-dom'
import EditToolbar from './EditToolbarr'
const EditHeader: React.FC = () => {
    const navigate = useNavigate()
    const {Title} = Typography
    return (
        <div className="bg-[#fff] border-b border-b-[#e8e8e8] px-4">
            <div className="flex my-6">
                <div className="flex-1 ">
                    <Space align="center">
                        <Button
                            type="link"
                            icon={<LeftOutlined />}
                            onClick={() => {
                                navigate(-1)
                            }}
                            style={{margin: 0, padding: 0}}>
                            返回
                        </Button>
                        <Title
                            level={4}
                            style={{
                                margin: 0,
                                lineHeight: '32px'
                            }}>
                            问卷标题
                        </Title>
                    </Space>
                </div>
                <div className="flex-1 text-center">
                    <EditToolbar />
                </div>
                <div className="flex-1 text-right">
                    <Space>
                        <Button>保存</Button>
                        <Button type="primary">发布</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default EditHeader
