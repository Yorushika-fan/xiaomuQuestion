import {useDispatch} from 'react-redux'
import EditCanvas from './EditCanvas'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import {changeSelectedId} from '@/store/componentsReducer'
import LeftPanel from './LeftPanel'
import RightPannel from './RightPannel'
import EditHeader from './EditHeader'
const Edit = () => {
    const {loading} = useLoadQuestionData()

    const dispatch = useDispatch()
    const clearSelectedId = () => {
        dispatch(changeSelectedId(''))
    }
    return (
        <div className="flex flex-col h-[calc(100vh-64px-68px)] bg-[#f0f2f5]">
            <EditHeader />
            <div className="flex-auto py-4">
                <div className="mx-5 flex h-full">
                    <div className="w-[295px] bg-white px-3">
                        <LeftPanel />
                    </div>
                    <div onClick={clearSelectedId} className="flex-1 flex overflow-hidden  items-center justify-center">
                        <div className="h-[712px] overflow-auto w-[400px] bg-white shadow-lg">
                            <div className="h-[900px]">
                                <EditCanvas loading={loading} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] bg-white px-3">
                        <RightPannel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
