import {RootState} from '@/store'
import {useSelector} from 'react-redux'

const useGetUserInfo = () => {
    const userInfo = useSelector((state: RootState) => state.user)
    return userInfo
}

export default useGetUserInfo
