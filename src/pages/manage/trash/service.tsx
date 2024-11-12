import {message, Modal} from 'antd'
import {ExclamationCircleOutlined} from '@ant-design/icons'
import type {SearchProps} from 'antd/es/input'

// 搜索处理函数
export const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)

// 删除确认函数
export const deleteItem = () => {
    Modal.confirm({
        title: '确定彻底删除吗？',
        icon: <ExclamationCircleOutlined />,
        content: '删除后不可恢复',
        onOk: () => {
            console.log('ok')
            message.success('删除成功')
        }
    })
}
