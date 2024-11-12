import {Link} from 'react-router-dom'
import {UserOutlined} from '@ant-design/icons'
import {Button, message} from 'antd'
import {removeToken} from '@/utils/user'
import {useDispatch} from 'react-redux'
import {logoutReducer} from '@/store/userReducer'

const Login = (
    <Link to="/login" className="text-blue-500">
        登录
    </Link>
)

const UserInfo = () => {
    const {username} = useGetUserInfo()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandle = () => {
        removeToken()
        dispatch(logoutReducer())
        navigate(LOGIN_PATHNAME)
        message.success('退出成功')
    }
    const Logout = (
        <div className="flex items-center gap-2">
            <UserOutlined />
            <span className="text-white">{username}</span>
            <Button type="link" onClick={logoutHandle}>
                退出
            </Button>
        </div>
    )

    return username ? Logout : Login
}

export default UserInfo
