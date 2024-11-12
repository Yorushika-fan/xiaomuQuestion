import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import {Button, Input, message, Space} from 'antd'
import {useDispatch} from 'react-redux'
import {changeComponentTitle} from '@/store/componentsReducer'
import {EyeInvisibleOutlined, LockOutlined} from '@ant-design/icons'

const Layers: React.FC = () => {
    const {componentList = [], selectedId} = useGetComponentInfo()

    const dispatch = useDispatch()

    const [changeTitleId, setChangeTitleId] = useState('')

    const handleTitleClick = (fe_id: string) => {
        const curComponent = componentList.find(c => c.fe_id === fe_id)
        if (curComponent && curComponent.isHidden) {
            message.info('隐藏组件不能修改')
            return
        }
        if (fe_id !== selectedId) {
            dispatch(changeSelectedId(fe_id))
            setChangeTitleId('')
            return
        }

        setChangeTitleId(fe_id)
    }

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value.trim()
        if (!newTitle) return
        if (!selectedId) return

        dispatch(changeComponentTitle({fe_id: selectedId, title: newTitle}))
    }

    const changeHidden = (fe_id: string, isHidden: boolean) => {
        dispatch(changeComponentHidden({fe_id, isHidden}))
    }

    const changeLocked = (fe_id: string) => {
        dispatch(toggleComponentLocked({fe_id}))
    }

    return (
        <>
            {componentList.map(c => {
                const {fe_id, title, isHidden, isLocked} = c

                return (
                    <div className="flex items-center justify-between my-3 " key={fe_id}>
                        <div onClick={() => handleTitleClick(fe_id)}>
                            {fe_id === changeTitleId && (
                                <Input
                                    value={title}
                                    onPressEnter={() => {
                                        setChangeTitleId('')
                                    }}
                                    onChange={changeTitle}
                                    onBlur={() => {
                                        setChangeTitleId('')
                                    }}
                                />
                            )}
                            {fe_id !== changeTitleId && title}
                        </div>
                        <div>
                            <Space>
                                <Button
                                    className={!isHidden ? 'opacity-20 hover:opacity-100' : ''}
                                    type={isHidden ? 'primary' : 'text'}
                                    icon={<EyeInvisibleOutlined />}
                                    size="small"
                                    onClick={() => changeHidden(fe_id, !isHidden)}
                                />
                                <Button
                                    className={!isLocked ? 'opacity-20 hover:opacity-100' : ''}
                                    type={isLocked ? 'primary' : 'text'}
                                    icon={<LockOutlined />}
                                    size="small"
                                    onClick={() => changeLocked(fe_id)}
                                />
                            </Space>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Layers
