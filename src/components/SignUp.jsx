import { Link } from "react-router-dom";

function SignUp() {
    return (
        <section className="bg-zinc-50 dark:bg-zinc-900 h-full pb-4 sm:pb-0">
            <div className="flex items-center justify-center gap-6 px-6 mx-auto lg:py-0">
                <div className="hidden md:flex flex-col items-center md:w-2/5">
                    <a href="https://github.com/brajpatel" target="_blank" className="flex items-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                        <img className="w-32 h-32" src="/logo.png" alt="logo"/>
                        Macaw
                    </a>
                
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2">
                            <i className="fa-solid fa-circle-check text-xl text-rose-600"></i>
                            <div className="flex flex-col">
                                <p className="font-bold text-lg lg:text-xl dark:text-zinc-200">Make connections</p>
                                <p className="lg:text-lg dark:text-zinc-300">Connect with others from around the world!</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <i className="fa-solid fa-circle-check text-xl text-rose-600"></i>
                            <div className="flex flex-col">
                                <p className="font-bold text-lg lg:text-xl dark:text-zinc-200">Another exciting feature</p>
                                <p className="lg:text-lg dark:text-zinc-300">Description for the feature</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <i className="fa-solid fa-circle-check text-xl text-rose-600"></i>
                            <div className="flex flex-col">
                                <p className="font-bold text-lg lg:text-xl dark:text-zinc-200">A third exciting feature</p>
                                <p className="lg:text-lg dark:text-zinc-300">Description for this feature to make you go woooh</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-zinc-800 shadow-lg px-6 pb-6 mt-8 md:mt-12 space-y-4 w-full md:w-1/2 xl:w-1/3 md:space-y-6 rounded-lg">
                    <a href="https://github.com/brajpatel" target="_blank" className="md:hidden flex flex-col items-center justify-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                        <img className="w-40 h-40" src="/logo.png" alt="logo"/>
                    </a>
                    <h1 className='font-bold dark:text-zinc-100 text-xl lg:text-2xl md:underline text-center'>Create an account</h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label className="text-lg dark:text-zinc-100" htmlFor="username">Username*</label>
                            <input className='bg-white dark:bg-zinc-700 block text-lg text-black dark:text-zinc-100 w-full px-4 py-2 mt-2 border-2 border-zinc-200 dark:border-zinc-700 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 rounded-md' type="text" name="username" id="username" placeholder="superDuperCoolKid9000" required/>
                        </div>

                        <div>
                            <label className="text-lg dark:text-zinc-100" htmlFor="email">Email*</label>
                            <input className='bg-white dark:bg-zinc-700 block text-lg text-black dark:text-zinc-100 w-full px-4 py-2 mt-2 border-2 border-zinc-200 dark:border-zinc-700 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 rounded-md' type="email" name="email" id="email" placeholder="your-name@email.com" required/>
                        </div>

                        <div>
                            <label className="text-lg dark:text-zinc-100" htmlFor="password">Password*</label>
                            <input className='bg-white dark:bg-zinc-700 block text-lg text-black dark:text-zinc-100 w-full px-4 py-2 mt-2 border-2 border-zinc-200 dark:border-zinc-700 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 rounded-md' type="password" name="password" id="password" placeholder="••••••••••••" required/>
                        </div>

                        <div>
                            <label className="text-lg dark:text-zinc-100" htmlFor="confirm_password">Confirm Password*</label>
                            <input className='bg-white dark:bg-zinc-700 block text-lg text-black dark:text-zinc-100 w-full px-4 py-2 mt-2 border-2 border-zinc-200 dark:border-zinc-700 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 rounded-md' type="password" name="confirm_password" id="confirm_password" placeholder="••••••••••••" required/>
                        </div>

                        <p className="text-lg dark:text-zinc-300 text-center">
                            Already have an account? <Link to="/login" className="text-rose-600 dark:text-rose-500 hover:underline">Login</Link>
                        </p>

                        <button className="bg-rose-600 hover:bg-rose-500 dark:hover:bg-rose-700 text-white w-full py-2 rounded-md" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp;