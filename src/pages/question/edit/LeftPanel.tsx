import {AppstoreOutlined, BarsOutlined} from '@ant-design/icons'
import {Tabs} from 'antd'
import Layers from './Layers'

const LeftPanel = () => {
    const tableItems = [
        {
            key: 'component',
            label: (
                <span>
                    <AppstoreOutlined />
                </span>
            ),
            children: <ComponentLib />
        },
        {
            key: 'layer',
            label: (
                <span>
                    <BarsOutlined />
                </span>
            ),
            children: <Layers />
        }
    ]

    return <Tabs items={tableItems} />
}

export default LeftPanel
