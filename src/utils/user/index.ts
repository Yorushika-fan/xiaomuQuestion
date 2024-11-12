import {USER_TOKEN_KEY} from '@/constants'

const setToken = (token: string) => localStorage.setItem(USER_TOKEN_KEY, token)

const getToken = () => localStorage.getItem(USER_TOKEN_KEY)

const removeToken = () => localStorage.removeItem(USER_TOKEN_KEY)

export {setToken, getToken, removeToken}
