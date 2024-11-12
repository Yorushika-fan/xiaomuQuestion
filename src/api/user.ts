import {LoginForm, RegisterForm, UserInfo} from '@/types'
import http from '@/utils/request'

const getUserInfo = () => {
    return http.get<UserInfo>('/mock/api/user/info')
}

const userRegister = (options: RegisterForm) => {
    return http.post('/mock/api/user/register', options)
}

const userLogin = (options: LoginForm) => {
    return http.post<{token: string}>('/mock/api/user/login', options)
}

const userLogout = () => {
    return http.post('/mock/api/user/logout')
}

export {getUserInfo, userRegister, userLogin, userLogout}
