import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TodoItem = {
    id: number
    name: string
    completed: boolean
}

const INITIAL_STATE: TodoItem[] = [
    {
        id: 1,
        name: '学习React',
        completed: false
    },
    {
        id: 2,
        name: '学习Vue',
        completed: true
    }
]

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: INITIAL_STATE,
    reducers: {
        addTodo: (state: TodoItem[], action: PayloadAction<TodoItem>) => [...state, action.payload],
        deleteTodo: (state: TodoItem[], action: PayloadAction<number>) =>
            state.filter(item => item.id !== action.payload),
        toggleTodo: (state: TodoItem[], action: PayloadAction<number>) =>
            state.map(item => (item.id === action.payload ? {...item, completed: !item.completed} : item))
    }
})

export const {addTodo, deleteTodo, toggleTodo} = todoListSlice.actions
export default todoListSlice.reducer
