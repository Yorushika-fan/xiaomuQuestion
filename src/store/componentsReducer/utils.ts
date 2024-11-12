import {ComponentInfoType} from './index'
const getNextSelectedId = (fe_id: string, componentList: ComponentInfoType[]) => {
    const visibleComponentList = componentList.filter(c => !c.isHidden)
    const index = visibleComponentList.findIndex(c => c.fe_id === fe_id)
    if (index < 0) return ''

    let nextSelectedId = ''
    const length = visibleComponentList.length
    if (length <= 1) {
        nextSelectedId = ''
    } else if (index + 1 === length) {
        nextSelectedId = visibleComponentList[index - 1].fe_id
    } else {
        nextSelectedId = visibleComponentList[index + 1].fe_id
    }
    return nextSelectedId
}

const insertComponent = (componentList: ComponentInfoType[], newComponent: ComponentInfoType) => {
    const currentIndex = componentList.findIndex(c => c.fe_id === newComponent.fe_id)
    // console.log('currentIndex', currentIndex)
    // console.log('newComponent', newComponent)
    // console.log('componentList', componentList)
    if (currentIndex >= 0) {
        componentList.splice(currentIndex + 1, 0, newComponent)
    } else {
        componentList.push(newComponent)
    }
}

export {getNextSelectedId, insertComponent}
