import {FormOutlined} from '@ant-design/icons'
import {Space, Typography} from 'antd'
import {useEffect, useState} from 'react'
import {HOME_PATHNAME, MANAGE_INDEX_PATHNAME} from '@/constants'
import useGetUserInfo from '@/hooks/useGetUserInfo'
const {Title} = Typography

const Logo = () => {
    const {username} = useGetUserInfo()

    const [pathname, setPathname] = useState(HOME_PATHNAME)

    useEffect(() => {
        if (username) {
            setPathname(MANAGE_INDEX_PATHNAME)
        }
    }, [username])
    return (
        <Link to={pathname}>
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
