// export enum ActionType {
//     DELETE = 'delete',
//     ADD = 'add'
// }
// export type Action =
//     | {
//           type: ActionType.DELETE
//           payload: number
//       }
//     | {
//           type: ActionType.ADD
//           payload: TodoState
//       }
// export type TodoState = {
//     id: number
//     name: string
// }
// const initialState: TodoState[] = [
//     {
//         id: 1,
//         name: 'Todo 1'
//     },
//     {
//         id: 2,
//         name: 'Todo 2'
//     }
// ]
// const reducer: React.Reducer<TodoState[], Action> = (state: TodoState[], action: Action) => {
//     switch (action.type) {
//         case ActionType.DELETE:
//             return state.filter(todo => todo.id !== action.payload)
//         case ActionType.ADD:
//             return [...state, action.payload]
//         default:
//             return state
//     }
// }

// export {reducer, initialState}
