import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type UserInfo = {
    username: string
    nickname: string
}

const INITIAL_STATE: UserInfo = {
    username: '',
    nickname: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        loginReducer: (_, action: PayloadAction<UserInfo>) => action.payload,
        logoutReducer: () => INITIAL_STATE
    }
})

export const {loginReducer, logoutReducer} = userSlice.actions
export default userSlice.reducer
