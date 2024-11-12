import {Spin} from 'antd'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import getComponentConfByType from '@/components/question'
import {ComponentInfoType} from '@/store/componentsReducer'
import {useDispatch} from 'react-redux'

type EditCanvasProps = {
    loading: boolean
}

const getComponent = (c: ComponentInfoType) => {
    const {type, props} = c
    const componentConf = getComponentConfByType(type)
    if (componentConf == null) return null
    const {Component} = componentConf
    return <Component {...props} />
}

const EditCanvas: React.FC<EditCanvasProps> = ({loading}) => {
    const {componentList, selectedId} = useGetComponentInfo()

    const dispatch = useDispatch()

    // 绑定快捷键
    useBandCanvasKeyPress()

    const handleSelect = (e: React.MouseEvent, id: string) => {
        e.stopPropagation()
        dispatch(changeSelectedId(id))
    }

    if (loading)
        return (
            <div className="text-center mt-6">
                <Spin />
            </div>
        )

    return (
        <div className="min-h-full overflow-hidden  bg-white overflow-hidden">
            {componentList
                .filter(c => c.isHidden === false)
                .map(c => (
                    <div
                        className={`m-3 p-3 border-b border-solid rounded-md hover:border-blue-300 ${selectedId === c.fe_id ? 'border-blue-300' : 'border-white'}`}
                        key={c.fe_id}
                        onClick={e => handleSelect(e, c.fe_id)}>
                        {getComponent(c)}
                    </div>
                ))}
        </div>
    )
}

export default EditCanvas
