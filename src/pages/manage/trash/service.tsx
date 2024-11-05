import {message, Modal} from 'antd'
import {ExclamationCircleOutlined} from '@ant-design/icons'
import type {SearchProps} from 'antd/es/input'
import type {ColumnType} from 'antd/es/table'
import type {QuestionCard} from '@/types'
import {Space, Tag, Button} from 'antd'

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

// 表格列配置
export const columns: ColumnType<QuestionCard>[] = [
    {
        title: '标题',
        dataIndex: 'title'
    },
    {
        title: '是否发布',
        dataIndex: 'isPublished',
        render: value => <Tag color={value ? 'processing' : 'default'}>{value ? '已发布' : '未发布'}</Tag>
    },
    {
        title: '答卷数量',
        dataIndex: 'answerCount'
    },
    {
        title: '创建时间',
        dataIndex: 'createdAt',
        render: value => value.toLocaleString()
    },
    {
        title: '操作',
        render: () => (
            <Space>
                <Button type="link">恢复</Button>
                <Button type="link" danger>
                    彻底删除
                </Button>
            </Space>
        )
    }
]
