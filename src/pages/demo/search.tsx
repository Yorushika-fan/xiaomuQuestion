// import {Button, Input} from 'antd'
// import {ActionType} from './reducer'
// import {TodoContext} from './context'
// const Search = () => {
//     const {state, dispatch} = useContext(TodoContext)

//     const [name, setName] = useState('')

//     const addTodo = () => {
//         dispatch({type: ActionType.ADD, payload: {id: state.length + 1, name}})
//         setName('')
//     }
//     return (
//         <div className="flex items-center gap-2">
//             <Input defaultValue="C" value={name} onChange={e => setName(e.target.value)} />
//             <Button type="primary" onClick={addTodo}>
//                 add{state.length}
//             </Button>
//         </div>
//     )
// }

// export default Search
