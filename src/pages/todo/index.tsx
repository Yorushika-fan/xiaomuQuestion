import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@/store'
import {deleteTodo} from '@/store/todoList'
import {Button, Input} from 'antd'
const Todo = () => {
    const todoList = useSelector((state: RootState) => state.todoList)
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(addTodo({id: Date.now(), name, completed: false}))
        setName('')
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Todo</h1>

            <div className="flex items-center gap-2">
                <Input value={name} onChange={e => setName(e.target.value)} />
                <Button type="primary" onClick={handleAdd}>
                    添加
                </Button>
            </div>

            <ul>
                {todoList.map(item => (
                    <li key={item.id} className="flex items-center justify-between">
                        <span
                            onClick={() => dispatch(toggleTodo(item.id))}
                            className={item.completed ? 'line-through' : ''}>
                            {item.name}
                        </span>
                        <Button type="link" onClick={() => dispatch(deleteTodo(item.id))}>
                            删除
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
