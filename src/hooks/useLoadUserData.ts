import {useEffect, useState} from 'react'
import {useRequest} from 'ahooks'
import {useDispatch} from 'react-redux'
import useGetUserInfo from './useGetUserInfo'
import {loginReducer} from '@/store/userReducer'

const useLoadUserData = () => {
    const [waitingUserData, setWaitingUserData] = useState(true)

    const dispatch = useDispatch()

    const userInfo = useGetUserInfo()
    const {run: fetchUserData} = useRequest(getUserInfo, {
        manual: true,
        onSuccess: res => {
            const {username, nickname} = res.data || {}
            dispatch(loginReducer({username, nickname}))
        },
        onFinally: () => {
            setWaitingUserData(false)
        }
    })

    useEffect(() => {
        if (userInfo) {
            setWaitingUserData(false)
            return
        }
        fetchUserData()
    }, [userInfo])

    return {waitingUserData}
}

export default useLoadUserData
