import useLoadQuestionData from '@/hooks/useLoadQuestionData'
const Edit = () => {
    const {data} = useLoadQuestionData()
    return (
        <>
            <h1>编辑问卷</h1>
            <div>{data?.data.title}</div>
        </>
    )
}

export default Edit
