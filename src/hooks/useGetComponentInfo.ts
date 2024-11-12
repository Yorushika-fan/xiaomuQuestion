import {RootState} from '@/store'
import {useSelector} from 'react-redux'

const useGetComponentInfo = () => {
    const components = useSelector((state: RootState) => state.components)
    const {componentList = [], selectedId, copiedComponent} = components
    const selectedComponent = componentList.find(c => c.fe_id === selectedId)
    return {
        componentList,
        selectedId,
        selectedComponent,
        copiedComponent
    }
}

export default useGetComponentInfo
