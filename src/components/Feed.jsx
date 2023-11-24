import {  IoSend } from "react-icons/io5";

function Feed() {
    return (
        <div id="container" className='relative hidden lg:block lg:h-screen p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 overflow-hidden'>
            <form className="flex justify-center items-center gap-4 px-2 py-3">
                <input className='w-[80%] bg-white dark:bg-gray-800 text-lg text-black dark:text-gray-100 px-4 py-2 border-2 border-gray-200 dark:border-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded' placeholder="What's on your mind today..."/>

                <button className='flex justify-center items-center gap-2 bg-rose-600 hover:bg-rose-500 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-[0.85rem] sm:py-2 text-gray-50 rounded-lg text-lg outline-none' type='submit'>
                    <span className='hidden sm:block'>Post</span>
                    <IoSend/>
                </button>
            </form>
        </div>
    )
}

export default Feed;