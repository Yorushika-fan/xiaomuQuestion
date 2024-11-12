import getComponentConfByType, {ComponentPropsType} from '@/components/question'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import {changeComponentProps} from '@/store/componentsReducer'
import {useDispatch} from 'react-redux'

const NoSelected: React.FC = () => {
    return <div>未选中组件</div>
}

const ComponentProp: React.FC = () => {
    const {selectedComponent} = useGetComponentInfo()
    const dispatch = useDispatch()
    if (!selectedComponent) return <NoSelected />

    const {type, props, isLocked, isHidden} = selectedComponent
    const componentConf = getComponentConfByType(type)
    if (!componentConf) return <NoSelected />

    const {PropComponent} = componentConf
    const handlePropsChange = (newProps: ComponentPropsType) => {
        if (!selectedComponent) return
        const {fe_id} = selectedComponent
        dispatch(changeComponentProps({fe_id, newProps}))
    }

    return <PropComponent {...props} onChange={handlePropsChange} disabled={isLocked || isHidden} />
}

export default ComponentProp
