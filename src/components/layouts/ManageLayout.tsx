import {Button, Divider, message} from 'antd'
import {BarsOutlined, DeleteOutlined, PlusOutlined, StarOutlined} from '@ant-design/icons'
import {useNavigate, useLocation} from 'react-router-dom'
import {useRequest} from 'ahooks'
import {createQuestion} from '@/api'

const ManageLayout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const menuList = [
        {
            text: '我的问卷',
            icon: <BarsOutlined />,
            link: '/manage/list'
        },
        {
            text: '星标问卷',
            icon: <StarOutlined />,
            link: '/manage/star'
        },
        {
            text: '回收站',
            icon: <DeleteOutlined />,
            link: '/manage/trash'
        }
    ]

    const {runAsync: createQuestionAsync} = useRequest(createQuestion, {
        manual: true,
        onSuccess(res) {
            console.log('res', res)
            navigate(`/question/edit/${res.data.id}`)
            message.success('创建成功')
        }
    })

    const MenuButtons = (md: boolean) => {
        return (
            <div className="w-full grid grid-cols-2 gap-2  md:justify-center md:items-center md:flex md:flex-col">
                <Button type="primary" size="large" icon={<PlusOutlined />} onClick={createQuestionAsync}>
                    创建问卷
                </Button>
                <Divider className={!md ? 'hidden' : ''} />
                {menuList.map(item => {
                    return (
                        <Button
                            key={item.link}
                            type={location.pathname === item.link ? 'primary' : 'default'}
                            size="large"
                            icon={item.icon}
                            onClick={() => navigate(item.link)}>
                            {item.text}
                        </Button>
                    )
                })}
            </div>
        )
    }
    return (
        <>
            <div className="md:grid container mx-auto py-4 md:grid-cols-12">
                <div className="md:col-span-2">{MenuButtons(false)}</div>
                <div className="md:col-span-10">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default ManageLayout
