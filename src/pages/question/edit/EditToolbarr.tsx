import {BlockOutlined, CopyOutlined, DeleteOutlined, EyeInvisibleOutlined, LockOutlined} from '@ant-design/icons'
import {Button, message, Space, Tooltip} from 'antd'
import {useDispatch} from 'react-redux'
import {
    deleteComponent,
    changeComponentHidden,
    toggleComponentLocked,
    copySelectedComponent
} from '@/store/componentsReducer'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
const EditToolbar: React.FC = () => {
    const dispatch = useDispatch()
    const {selectedId, selectedComponent, copiedComponent} = useGetComponentInfo()
    const {isLocked} = selectedComponent || {}
    const handleDelete = () => {
        dispatch(deleteComponent())
        message.success('删除成功')
    }
    const handleHide = () => {
        dispatch(
            changeComponentHidden({
                fe_id: selectedId,
                isHidden: true
            })
        )
        message.success('隐藏成功')
    }
    const handleLock = () => {
        dispatch(toggleComponentLocked({fe_id: selectedId}))
        message.success('锁定成功')
    }
    const handleCopy = () => {
        dispatch(copySelectedComponent())
        message.success('复制成功')
    }
    const handlePaste = () => {
        dispatch(pasteCopiedComponent())
        message.success('粘贴成功')
    }
    return (
        <Space>
            <Tooltip title="删除" />
            <Button icon={<DeleteOutlined />} onClick={handleDelete}></Button>
            <Tooltip title="隐藏" />
            <Button icon={<EyeInvisibleOutlined />} onClick={handleHide}></Button>
            <Tooltip title="锁定" />
            <Button
                className={isLocked ? 'isLocked' : ''}
                type={isLocked ? 'primary' : 'default'}
                icon={<LockOutlined />}
                onClick={handleLock}></Button>
            <Tooltip title="复制" />
            <Button icon={<CopyOutlined />} onClick={handleCopy}></Button>
            <Tooltip title="粘贴" />
            <Button icon={<BlockOutlined />} disabled={!copiedComponent} onClick={handlePaste}></Button>
        </Space>
    )
}

export default EditToolbar
