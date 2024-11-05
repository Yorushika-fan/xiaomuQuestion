import {Layout} from 'antd'
const {Header, Content, Footer} = Layout
import Logo from '@/components/Logo'
import UserInfo from '@/components/UserInfo'
const MainLayout = () => {
    return (
        <>
            <Layout>
                <Header className="flex justify-between items-center">
                    <Logo />
                    <UserInfo />
                </Header>
                <Content className="min-h-[calc(100vh-64px-71px)] ">
                    <Outlet />
                </Content>
                <Footer className="text-center text-sm text-blue-500">小慕问卷 &copy; 2024</Footer>
            </Layout>
        </>
    )
}

export default MainLayout
