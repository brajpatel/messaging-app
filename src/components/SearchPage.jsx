import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function SearchPage() {
    return (
        <div className='h-screen lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative flex flex-col items-center bg-white dark:bg-gray-800 overflow-x-hidden overflow-y-auto'>

        <div className="h-[4.4rem] md:h-[4.6rem] w-full font-bold bg-rose-600 lg:bg-white dark:bg-gray-700 lg:dark:bg-gray-800 text-gray-50 lg:text-gray-900 dark:text-gray-50 flex justify-between items-center px-4">
            <Link to="/" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
            </Link>

            <p className='text-lg'>Search</p>
        </div>

        <div className='w-1/2 flex justify-center items-center py-4'>
            <input className='bg-white dark:bg-gray-700 text-lg text-black dark:text-gray-100 w-full px-4 py-2 mt-2 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 rounded' placeholder="Search by username"/>
        </div>
    </div>
    )
}

export default SearchPage;