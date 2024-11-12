import {FileTextOutlined, SettingOutlined} from '@ant-design/icons'
import {Tabs} from 'antd'
import ComponentProp from './ComponentProp'

const RightPannel: React.FC = () => {
    const tabList = [
        {
            key: 'info',
            label: (
                <span>
                    <FileTextOutlined />
                    组件属性
                </span>
            ),
            children: <ComponentProp />
        },
        {
            key: 'setting',
            label: (
                <span>
                    <SettingOutlined />
                    样式设置
                </span>
            ),
            children: <div>页面设置</div>
        }
    ]
    return <Tabs defaultActiveKey="info" items={tabList}></Tabs>
}
export default RightPannel
