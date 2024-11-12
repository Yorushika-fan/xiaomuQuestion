import {ComponentPropsType} from '@/components/question'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ComponentState} from 'react'
import {getNextSelectedId} from './utils'
import cloneDeep from 'lodash.clonedeep'
import {nanoid} from 'nanoid'
export type ComponentInfoType = {
    fe_id: string
    title: string
    type: string
    props: ComponentPropsType
    isHidden?: boolean
    isLocked?: boolean
}

export type ComponentsStateType = {
    selectedId: string
    componentList: ComponentInfoType[]
    copiedComponent: ComponentInfoType | null
}

const INIT_STATE: ComponentsStateType = {
    selectedId: '',
    componentList: [],
    copiedComponent: null
}

export const componentsSlice = createSlice({
    name: 'components',
    initialState: INIT_STATE,
    reducers: {
        resetComponents: (_, action: PayloadAction<ComponentState>) => action.payload,
        changeSelectedId: (state, action: PayloadAction<string>) => {
            state.selectedId = action.payload
        },
        addComponent: (state, action: PayloadAction<ComponentInfoType>) => {
            insertComponent(state.componentList, action.payload)
        },
        changeComponentProps: (state, action: PayloadAction<{fe_id: string; newProps: ComponentPropsType}>) => {
            const {fe_id, newProps} = action.payload
            const component = state.componentList.find(c => c.fe_id === fe_id)
            if (component) {
                component.props = {...component.props, ...newProps}
            }
        },
        deleteComponent: state => {
            const {selectedId} = state
            const nextSelectedId = getNextSelectedId(selectedId, state.componentList)
            state.selectedId = nextSelectedId
            state.componentList = state.componentList.filter(c => c.fe_id !== selectedId)
        },
        changeComponentHidden: (state, action: PayloadAction<{fe_id: string; isHidden: boolean}>) => {
            const {componentList = [], selectedId} = state
            const {fe_id, isHidden} = action.payload
            let newSelectedId = ''
            if (isHidden) {
                newSelectedId = getNextSelectedId(selectedId, componentList)
            } else {
                newSelectedId = fe_id
            }
            state.selectedId = newSelectedId
            const component = componentList.find(c => c.fe_id === fe_id)
            if (component) {
                component.isHidden = isHidden
            }
        },
        toggleComponentLocked: (state, action: PayloadAction<{fe_id: string}>) => {
            const {fe_id} = action.payload
            const component = state.componentList.find(c => c.fe_id === fe_id)
            if (component) {
                component.isLocked = !component.isLocked
            }
        },
        copySelectedComponent: state => {
            const {selectedId, componentList} = state
            const component = componentList.find(c => c.fe_id === selectedId)
            if (component) {
                state.copiedComponent = cloneDeep(component)
            }
        },
        pasteCopiedComponent: state => {
            const {copiedComponent} = state
            if (!copiedComponent) return
            copiedComponent.fe_id = nanoid()
            insertComponent(state.componentList, copiedComponent)
        },
        selectPrevComponent: state => {
            const {selectedId, componentList} = state
            const currentIndex = componentList.findIndex(c => c.fe_id === selectedId)
            if (currentIndex <= 0) return
            const prevComponent = componentList[currentIndex - 1]
            if (prevComponent) {
                state.selectedId = prevComponent.fe_id
            }
        },
        selectNextComponent: state => {
            const {selectedId, componentList} = state
            const currentIndex = componentList.findIndex(c => c.fe_id === selectedId)
            if (currentIndex < 0) return
            if (currentIndex + 1 >= componentList.length) return
            const nextComponent = componentList[currentIndex + 1]
            if (nextComponent) {
                state.selectedId = nextComponent.fe_id
            }
        },
        changeComponentTitle: (state, action: PayloadAction<{fe_id: string; title: string}>) => {
            const {fe_id, title} = action.payload
            const component = state.componentList.find(c => c.fe_id === fe_id)
            if (component) {
                component.title = title
            }
        }
    }
})

export const {
    resetComponents,
    changeSelectedId,
    addComponent,
    changeComponentHidden,
    deleteComponent,
    changeComponentProps,
    toggleComponentLocked,
    copySelectedComponent,
    pasteCopiedComponent,
    selectPrevComponent,
    selectNextComponent,
    changeComponentTitle
} = componentsSlice.actions

export default componentsSlice.reducer
