const Header = () => {
    return (
        <>
            <div className="grid min-h-[60px] grid-cols-1 sm:grid-cols-12 bg-black text-white">
                <div className="sm:col-span-1"></div>
                <div className="sm:col-span-10 flex justify-between items-center">
                    <div className="text-3xl font-bold ">小慕问卷</div>
                    <div className="text-sm text-blue-500">登录</div>
                </div>
                <div className="sm:col-span-1"></div>
            </div>
        </>
    )
}

export default Header
