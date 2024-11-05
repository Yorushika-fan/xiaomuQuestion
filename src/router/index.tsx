import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '@/components/layouts/MainLayout'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import ManageLayout from '@/components/layouts/ManageLayout'
import QuestionLayout from '@/components/layouts/QuestionLayout'
import List from '@/pages/manage/List'
import Star from '@/pages/manage/Star'
import Trash from '@/pages/manage/trash'
import Edit from '@/pages/question/Edit'
import Stat from '@/pages/question/Stat'
import NotFound from '@/pages/error/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'manage',
                element: <ManageLayout />,
                children: [
                    {
                        path: 'list',
                        element: <List />
                    },
                    {
                        path: 'star',
                        element: <Star />
                    },
                    {
                        path: 'trash',
                        element: <Trash />
                    }
                ]
            },
            {
                path: 'question',
                element: <QuestionLayout />,
                children: [
                    {
                        path: 'edit/:id',
                        element: <Edit />
                    },
                    {
                        path: 'stat/:id',
                        element: <Stat />
                    }
                ]
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router
