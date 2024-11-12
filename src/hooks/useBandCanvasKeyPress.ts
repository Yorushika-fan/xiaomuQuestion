import {
    deleteComponent,
    copySelectedComponent,
    pasteCopiedComponent,
    selectPrevComponent,
    selectNextComponent
} from '@/store/componentsReducer'
import {useKeyPress} from 'ahooks'
import {useDispatch} from 'react-redux'

const isActiveElement = (element: HTMLElement) => document.activeElement === element

const useBandCanvasKeyPress = () => {
    const dispatch = useDispatch()

    // 删除组件
    useKeyPress(['delete', 'backspace'], () => {
        if (!isActiveElement(document.body)) return
        dispatch(deleteComponent())
    })

    //复制组件
    useKeyPress(['ctrl.c', 'meta.c'], () => {
        if (!isActiveElement(document.body)) return
        dispatch(copySelectedComponent())
    })

    // 粘贴组件
    useKeyPress(['ctrl.v', 'meta.v'], () => {
        if (!isActiveElement(document.body)) return
        dispatch(pasteCopiedComponent())
    })

    // 选中上一个组件
    useKeyPress(['uparrow'], () => {
        console.log('选中上一个组件')
        if (!isActiveElement(document.body)) return
        dispatch(selectPrevComponent())
    })

    //  选中下一个组件
    useKeyPress(['downarrow'], () => {
        if (!isActiveElement(document.body)) return
        dispatch(selectNextComponent())
    })
}

export default useBandCanvasKeyPress
