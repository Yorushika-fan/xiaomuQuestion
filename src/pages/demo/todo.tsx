// import {useContext} from 'react'
// import {Button} from 'antd'
// import {ActionType} from './reducer'
// import {TodoContext} from './context'

// const Todo = () => {
//     // const [state, dispatch] = useReducer(reducer, initialState)
//     const {state, dispatch} = useContext(TodoContext)
//     console.log(state)
//     const handleDelete = (id: number) => {
//         dispatch({type: ActionType.DELETE, payload: id})
//     }
//     return (
//         <div className="flex text-2xl flex-col items-center justify-center">
//             {state.map(todo => (
//                 <div key={todo.id}>
//                     <span className="text-red-500 mr-6">{todo.name}</span>
//                     <Button type="primary" size="small" onClick={() => handleDelete(todo.id)}>
//                         delete
//                     </Button>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Todo
