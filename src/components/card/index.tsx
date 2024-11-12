import {QuestionCard} from '@/types'
import {BarChartOutlined, CopyOutlined, DeleteOutlined, EditOutlined, StarOutlined} from '@ant-design/icons'
import {useRequest} from 'ahooks'
import {Button, Divider, message, Popconfirm, PopconfirmProps, Tag} from 'antd'
import {useNavigate} from 'react-router-dom'

const Card = (card: QuestionCard) => {
    const navigate = useNavigate()

    const [isStar, setIsStar] = useState(card.isStar)
    const cancel: PopconfirmProps['onCancel'] = e => {
        console.log(e)
        message.error('Click on No')
    }

    const {loading: toggleStarLoading, run: runToggleStar} = useRequest(
        async () => {
            const res = await updateQuestion(card.id, {isStar: !isStar})
            return res.data
        },
        {
            manual: true,
            onSuccess: () => {
                setIsStar(!isStar)
                message.success('收藏成功')
            }
        }
    )

    const {loading: duplicateLoading, run: runDuplicate} = useRequest(
        async () => await duplicateQuestion(card.id),

        {
            manual: true,
            onSuccess: res => {
                message.success('复制成功')
                navigate(`/question/edit/${res.data.id}`)
            }
        }
    )
    const {loading: deleteLoading, run: runDelete} = useRequest(
        async () => await updateQuestion(card.id, {isDeleted: true}),
        {
            manual: true,
            onSuccess: () => {
                message.success('删除成功')
            }
        }
    )

    const edit = () => {
        navigate(`/question/edit/${card.id}`)
    }

    const leftButtons = (
        <div className="flex flex-row flex-wrap items-center gap-1">
            <Button type="text" icon={<EditOutlined />} onClick={edit}>
                编辑
            </Button>
            <Button type="text" icon={<BarChartOutlined />} disabled={!card.isPublished}>
                统计
            </Button>
        </div>
    )
    const rightButtons = (
        <div className="flex flex-row flex-wrap items-center gap-1">
            <Button icon={<StarOutlined />} type="text" onClick={runToggleStar} loading={toggleStarLoading}>
                {isStar ? '取消收藏' : '收藏'}
            </Button>
            <Popconfirm
                title="复制问卷"
                description="确定复制该问卷吗？"
                onConfirm={runDuplicate}
                onCancel={cancel}
                okText="确定"
                cancelText="取消">
                <Button loading={duplicateLoading} icon={<CopyOutlined />} type="text">
                    复制
                </Button>
            </Popconfirm>

            <Popconfirm
                title="删除问卷"
                description="确定删除该问卷吗？"
                onConfirm={runDelete}
                onCancel={cancel}
                okText="确定"
                cancelText="取消">
                <Button icon={<DeleteOutlined />} loading={deleteLoading} type="text" danger>
                    删除
                </Button>
            </Popconfirm>
        </div>
    )

    return (
        <>
            <div className="border rounded-md border-gray-200 bg-orange-400 hover:shadow-md p-3">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex-1 font-bold">
                        {isStar && <StarOutlined className="text-red-500 mr-2" />}
                        <Link to={`/question/${card.id}`}>{card.title}</Link>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Tag color={card.isPublished ? 'processing' : 'default'}>
                            {card.isPublished ? '已发布' : '未发布'}
                        </Tag>
                        <p className="m-0">
                            答卷：
                            {card.createdAt.toString()}
                        </p>
                    </div>
                </div>
                <Divider className="my-2" />
                <div className="flex flex-row justify-between items-center">
                    {leftButtons}
                    {rightButtons}
                </div>
            </div>
        </>
    )
}

export default Card
