import {configureStore} from '@reduxjs/toolkit'
import todoListReducer from './todoList'
import userReducer from './userReducer'
import componentsReducer from './componentsReducer'
export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
        user: userReducer,
        components: componentsReducer
    }
})
