import {useState} from 'react'
import {Button, Empty, Space, Typography, Input} from 'antd'
import Table from 'antd/es/table'
import {onSearch, deleteItem, columns} from './service'
import {DEFAULT_PAGE_SIZE, DEFAULT_CURRENT} from '@/constants'
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
const {Search} = Input
const {Title} = Typography

const Trash = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

    // const [current, setCurrent] = useState(() => {
    //     return parseInt(searchParams.get('page') || '1')
    // })
    const {data, loading} = useLoadQuestionListData({isDeleted: true})

    // const handlePageChange = (page: number) => {
    //     setCurrent(page)
    //     setSearchParams({page: page.toString()})
    // }
    return (
        <>
            <div className="flex justify-between items-center">
                <Title level={3}>回收站</Title>
                <Search placeholder="请输入关键字" size="large" allowClear onSearch={onSearch} style={{width: 200}} />
            </div>
            {data?.rows.length === 0 && <Empty description="暂无数据" />}
            <Space className="mb-2">
                <Button type="primary" disabled={selectedRowKeys.length === 0}>
                    恢复
                </Button>
                <Button type="primary" danger disabled={selectedRowKeys.length === 0} onClick={deleteItem}>
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
                    onChange: (selectedRowKeys: React.Key[]) => setSelectedRowKeys(selectedRowKeys)
                }}
            />
        </>
    )
}

export default Trash
