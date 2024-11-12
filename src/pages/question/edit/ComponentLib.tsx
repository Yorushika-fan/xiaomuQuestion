import {componentConfGroup, ComponentConfType} from '@/components/question'
import {message, Typography} from 'antd'
import {nanoid} from 'nanoid'
import {useDispatch} from 'react-redux'
import {addComponent} from '@/store/componentsReducer'
const {Title} = Typography

const GenComponent = (c: ComponentConfType) => {
    const {Component, title, type, defaultProps} = c
    const dispatch = useDispatch()
    const handleClick = () => {
        message.success('添加成功')
        dispatch(
            addComponent({
                fe_id: nanoid(),
                title,
                type,
                isHidden: false,
                isLocked: false,
                props: defaultProps
            })
        )
    }
    return (
        <div
            key={type}
            onClick={handleClick}
            className="mb-3 p-3 rounded-lg hover:shadow-lg border-solid
            cursor-pointer border-[#fff] hover:border-[#d9d9d9]">
            <div className="pointer-events-none">
                <Component />
            </div>
        </div>
    )
}
const ComponentLib = () => {
    return (
        <>
            {componentConfGroup.map(group => {
                const {groupId, groupName, components} = group
                return (
                    <div key={groupId}>
                        <Title level={4}>{groupName}</Title>
                        <div>{components.map(c => GenComponent(c))}</div>
                    </div>
                )
            })}
        </>
    )
}

export default ComponentLib
