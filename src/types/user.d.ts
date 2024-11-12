type UserInfo = {
    username: string
    nickname: string
}

type RegisterForm = {
    username: string
    password: string
    nickname: string
}

type LoginForm = {
    username: string
    password: string
    remember: boolean
}

export type {UserInfo, RegisterForm, LoginForm}
