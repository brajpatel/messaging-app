function Login() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-screen">
            <div className="flex items-center justify-center gap-10 px-6 mx-auto lg:py-0">
                <div className="bg-white dark:bg-gray-800 shadow p-6 space-y-4 w-full mt-8 md:w-1/2 md:mt-12 lg:w-1/3 md:space-y-6 sm:p-8 rounded-lg">
                    <h1 className='font-bold dark:text-gray-100 text-xl text-center'>
                        Welcome back
                        <span className="block dark:text-gray-300">We're so excited to see you again!</span>
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label className="text-lg dark:text-gray-100" htmlFor="email">Your email</label>
                            <input className='block text-lg w-full px-4 py-2 mt-2 border-2 focus:outline-none focus:border-rose-500 rounded-md' type="email" name="email" id="email" placeholder="name@company.com" required=""/>
                        </div>

                        <div>
                            <label className="text-lg dark:text-gray-100" htmlFor="password">Password</label>
                            <input className='block text-lg w-full px-4 py-2 mt-2 border-2 focus:outline-none focus:border-rose-500 rounded-md' type="password" name="password" id="password" placeholder="••••••••••••" required=""/>
                        </div>

                        <p className="text-lg dark:text-gray-300 text-center">
                            Don't have an account yet? <a href="#" className="text-rose-600 dark:text-rose-500 hover:underline">Sign up</a>
                        </p>

                        <button className="bg-rose-600 text-white w-full py-2 rounded-md" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;