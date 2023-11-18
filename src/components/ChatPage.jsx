import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoSend } from "react-icons/io5";

function ChatPage() {
    return (
        <div className='h-screen w-full lg:w-auto absolute top-0 left-0 lg:relative p-2 lg:p-3 flex flex-col bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto'>
            <Link to="/" className='absolute top-4 left-4 lg:hidden bg-rose-600 hover:bg-rose-500 dark:bg-gray-700 dark:hover:bg-gray-600 text-white p-2 rounded-full'>
                <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
            </Link>

            <div className='h-full text-gray-900 dark:text-gray-50 p-2'>
                Messages here
            </div>

            <div className='flex justify-center items-center gap-4 px-2 py-2'>
                <input className='w-[80%] bg-white dark:bg-gray-800 text-lg text-black dark:text-gray-100 px-4 py-2 mt-2 border-2 border-gray-200 dark:border-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded text-center' placeholder="Type message here"/>

                <button className='h-max flex justify-center items-center gap-2 bg-rose-600 hover:bg-rose-500 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2 text-gray-50 rounded-lg text-lg outline-none'>
                    Send
                    <IoSend/>
                </button>
            </div>
        </div>
    )
}

export default ChatPage;