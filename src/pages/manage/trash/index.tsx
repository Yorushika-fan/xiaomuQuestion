import {useState} from 'react'
import {Button, Empty, Space, Typography, Input, message, Tag, Modal} from 'antd'
import Table, {ColumnType} from 'antd/es/table'
import {onSearch} from './service'
import {DEFAULT_PAGE_SIZE, DEFAULT_CURRENT} from '@/constants'
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
import {useRequest} from 'ahooks'
import {QuestionCard} from '@/types'
import {deleteQuestion, updateQuestion} from '@/api'
const {Search} = Input
const {Title} = Typography

const Trash = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const {data, loading, refresh} = useLoadQuestionListData({isDeleted: true})

    const successHandler = (str: string) => {
        message.success(str)
        refresh()
        setSelectedRowKeys([])
    }
    const {loading: restoreLoading, run: runRestore} = useRequest(
        async () => {
            for await (const id of selectedRowKeys) {
                await updateQuestion(id.toString(), {isDeleted: false})
            }
        },
        {
            manual: true,
            debounceWait: 500,
            onSuccess: () => successHandler('恢复成功')
        }
    )

    const {loading: deleteLoading, run: runDelete} = useRequest(
        async () => {
            await deleteQuestion(selectedRowKeys as string[])
        },
        {
            manual: true,
            onSuccess: () => successHandler('删除成功')
        }
    )

    const deleteModal = () => {
        Modal.confirm({
            title: '确定要彻底删除吗？',
            okText: '确定',
            cancelText: '取消',
            centered: true,
            onOk: runDelete
        })
    }
    // 表格列配置
    const columns: ColumnType<QuestionCard>[] = [
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
                    <Button loading={restoreLoading} type="link" onClick={runRestore}>
                        恢复
                    </Button>
                    <Button type="link" danger>
                        彻底删除
                    </Button>
                </Space>
            )
        }
    ]

    return (
        <>
            <div className="flex justify-between items-center">
                <Title level={3}>回收站</Title>
                <Search placeholder="请输入关键字" size="large" allowClear onSearch={onSearch} style={{width: 200}} />
            </div>
            {data?.rows.length === 0 && <Empty description="暂无数据" />}
            <Space className="mb-2">
                <Button
                    loading={restoreLoading}
                    type="primary"
                    disabled={selectedRowKeys.length === 0}
                    onClick={runRestore}>
                    恢复
                </Button>

                <Button
                    loading={deleteLoading}
                    type="primary"
                    danger
                    disabled={selectedRowKeys.length === 0}
                    onClick={deleteModal}>
                    彻底删除
                </Button>
            </Space>
            <Table
                dataSource={data?.rows}
                rowKey="id"
                columns={columns}
                loading={loading}
                pagination={{
                    // current: data?.current,
                    defaultPageSize: DEFAULT_PAGE_SIZE,
                    total: data?.total,
                    defaultCurrent: DEFAULT_CURRENT,
                    showQuickJumper: true,
                    showSizeChanger: true,
                    showTotal: (total: number) => `共 ${total} 条`
                    // onChange: handlePageChange
                }}
                scroll={{y: 'calc(100vh - 180px)'}}
                rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys: React.Key[]) => {
                        console.log(selectedRowKeys)
                        setSelectedRowKeys(selectedRowKeys)
                    }
                }}
            />
        </>
    )
}

export default Trash
