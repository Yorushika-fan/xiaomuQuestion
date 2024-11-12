import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()

    useEffect(() => {
        // 设置3秒后自动跳转
        const timer = setTimeout(() => {
            localStorage.setItem('hasVisited', 'true')
            navigate('/')
        }, 3000)

        return () => clearTimeout(timer)
    })

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-400 flex flex-col items-center justify-center">
            <div className="backdrop-blur-lg bg-white/20 p-8 rounded-xl text-center max-w-2xl mx-4">
                <h1 className="text-4xl font-bold text-white mb-6">欢迎来到网站导航</h1>
                <p className="text-white/90 text-lg mb-4">这是一个精心策划的网站导航平台</p>
                <p className="text-white/90 text-lg mb-8">在这里，你可以发现最实用的网站资源</p>
                <div className="text-white/60">3秒后自动跳转...</div>
            </div>
        </div>
    )
}

export default Welcome
