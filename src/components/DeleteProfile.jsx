import { Link, useParams } from "react-router-dom";

function DeleteProfile() {
    const userId = useParams();

    return (
        <div className="bg-gray-50 dark:bg-gray-900 h-screen">
            <div className="flex items-center justify-center gap-10 px-6 mx-auto lg:py-0">
                <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow px-6 pb-6 space-y-4 w-full mt-8 md:mt-12 md:w-3/4 lg:w-1/2 xl:w-1/3 md:space-y-6 rounded-lg">
                    <a href="https://github.com/brajpatel" target="_blank" className="flex flex-col items-center justify-center text-2xl font-semibold text-gray-900 dark:text-gray-50">
                        <img className="w-40 h-40" src="/logo.png" alt="logo"/>
                    </a>

                    <h1 className='font-bold dark:text-gray-100 text-xl lg:text-2xl text-center'>
                        Welcome back
                        <span className="block dark:text-gray-100">We're so excited to see you again!</span>
                    </h1>

                    <form className="space-y-4 md:space-y-6" action="#">
                        <input id="userid" name="userid" value={userId} type="hidden"/>
                        <button className="bg-rose-600 hover:bg-rose-500 dark:hover:bg-rose-700 text-white w-full py-2 rounded" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DeleteProfile;