function Login() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-center gap-60 px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex flex-col">
                    <a href="#" className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-20 h-20" src="/logo.png" alt="logo"/>
                        Macaw
                    </a>
                    <div>
                        
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-700 shadow p-6 space-y-4 md:space-y-6 sm:p-8 rounded-lg">
                    <h1 className='font-bold dark:text-gray-100'>
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label className="mb-2" htmlFor="email">Your email</label>
                            <input className='block w-full px-4 py-2 border-2 focus:outline-none focus:border-rose-500 rounded-md' type="email" name="email" id="email" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="password">Password</label>
                            <input className='block w-full px-4 py-2 border-2 focus:outline-none focus:border-rose-500 rounded-md' type="password" name="password" id="password" placeholder="••••••••••••" required=""/>
                        </div>
                        <div>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button className="bg-rose-600 text-white w-full py-2 rounded-md" type="submit">Sign in</button>
                        <p>
                            Don't have an account yet? <a href="#">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;