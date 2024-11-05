import {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const RouteGuard = ({children}: {children: React.ReactNode}) => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited')

        if (!hasVisited && location.pathname !== '/welcome') {
            navigate('/welcome')
        }

        setLoading(false)
    }, [navigate, location])

    if (loading) {
        return null
    }

    return <>{children}</>
}

export default RouteGuard
