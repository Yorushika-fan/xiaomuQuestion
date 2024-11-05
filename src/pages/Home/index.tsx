import {Button, Typography} from 'antd'
const {Title, Paragraph} = Typography

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px-71px)]">
            <Title>问卷调查 | 在线投票</Title>
            <Paragraph>已累计创建问卷 1000 份，发布问卷 900 份，收到答卷 985 份</Paragraph>
            <div>
                <Button type="primary" size="large">
                    开始使用
                </Button>
            </div>
        </div>
    )
}

export default Home
