import {MockMethod} from 'vite-plugin-mock'

const userInfo = {
    username: 'admin',
    nickname: '管理员'
}

export const userMock = [
    {
        url: '/mock/api/user/info',
        method: 'get',
        response: () => {
            return {
                code: 0,
                data: userInfo
            }
        }
    },
    {
        url: '/mock/api/user/register',
        method: 'post',
        response: () => {
            return {
                code: 0,
                data: {}
            }
        }
    },
    {
        url: '/mock/api/user/login',
        method: 'post',
        response: () => {
            return {
                code: 0,
                data: {
                    token: '1234567890'
                }
            }
        }
    },
    {
        url: '/mock/api/user/logout',
        method: 'post',
        response: () => {
            return {
                code: 0
            }
        }
    }
] as MockMethod[]
