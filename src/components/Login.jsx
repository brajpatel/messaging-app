import { Link } from "react-router-dom";

function Login() {
    return (
        <section className="bg-zinc-50 dark:bg-zinc-900 h-screen">
            <div className="flex items-center justify-center gap-10 px-6 mx-auto lg:py-0">
                <div className="bg-white dark:bg-zinc-800 shadow-lg px-6 pb-6 space-y-4 w-full mt-8 md:mt-12 md:w-3/4 lg:w-1/2 xl:w-1/3 md:space-y-6 rounded-lg">
                    <a href="https://github.com/brajpatel" target="_blank" className="flex flex-col items-center justify-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                        <img className="w-40 h-40" src="/logo.png" alt="logo"/>
                    </a>

                    <h1 className='font-bold dark:text-zinc-100 text-xl lg:text-2xl text-center'>
                        Welcome back
                        <span className="block dark:text-zinc-100">We're so excited to see you again!</span>
                    </h1>

                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label className="text-lg dark:text-zinc-100" htmlFor="email">Email</label>
                            <input className='bg-white dark:bg-zinc-700 block text-lg text-black dark:text-zinc-100 w-full px-4 py-2 mt-2 border-2 border-zinc-200 dark:border-zinc-700 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 rounded-md' type="email" name="email" id="email" placeholder="your-name@email.com" required/>
                        </div>

                        <div>
                            <label className="text-lg dark:text-zinc-100" htmlFor="password">Password</label>
                            <input className='bg-white dark:bg-zinc-700 block text-lg text-black dark:text-zinc-100 w-full px-4 py-2 mt-2 border-2 border-zinc-200 dark:border-zinc-700 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 rounded-md' type="password" name="password" id="password" placeholder="••••••••••••" required/>
                        </div>

                        <p className="text-lg dark:text-zinc-300 text-center">
                            Don't have an account yet? <Link to="/sign-up" className="text-rose-600 dark:text-rose-500 hover:underline">Sign up</Link>
                        </p>

                        <button className="bg-rose-600 hover:bg-rose-500 dark:hover:bg-rose-700 text-white w-full py-2 rounded-md" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;