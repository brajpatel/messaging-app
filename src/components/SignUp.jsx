function SignUp() {
    return (
        <div className="hidden md:flex flex-col items-center md:w-1/2 lg:w-1/3">
        <a href="https://github.com/brajpatel" target="_blank" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-gray-50">
            <img className="w-32 h-32" src="/logo.png" alt="logo"/>
            Macaw
        </a>
    
        <div className="flex flex-col gap-5">
            <div className="flex gap-2">
                <i className="fa-solid fa-circle-check text-xl text-rose-600"></i>
                <div className="flex flex-col">
                    <p className="font-bold text-lg lg:text-xl dark:text-gray-200">Make connections</p>
                    <p className="lg:text-lg dark:text-gray-300">Connect with others from around the world!</p>
                </div>
            </div>

            <div className="flex gap-2">
                <i className="fa-solid fa-circle-check text-xl text-rose-600"></i>
                <div className="flex flex-col">
                    <p className="font-bold text-lg lg:text-xl dark:text-gray-200">Another feature</p>
                    <p className="lg:text-lg dark:text-gray-300">Description for this feature</p>
                </div>
            </div>

            <div className="flex gap-2">
                <i className="fa-solid fa-circle-check text-xl text-rose-600"></i>
                <div className="flex flex-col">
                    <p className="font-bold text-lg lg:text-xl dark:text-gray-200">Another feature</p>
                    <p className="lg:text-lg dark:text-gray-300">Description for this feature</p>
                </div>
            </div>
        </div>
    </div>
    )
}