function Login() {
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-20 h-20" src="/logo.png" alt="logo"/>
                    Macaw
                </a>
                <div class="bg-white dark:bg-gray-700 shadow p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className='font-bold'>
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email">Your email</label>
                            <input className='block' type="email" name="email" id="email" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input className='block' type="password" name="password" id="password" placeholder="********" required=""/>
                        </div>
                        <div>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit">Sign in</button>
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