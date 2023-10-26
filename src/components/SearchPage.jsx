import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function SearchPage() {
    return (
        <div className='h-screen lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative bg-white dark:bg-gray-800 overflow-x-hidden overflow-y-auto'>

        <div className="h-[4.4rem] font-bold bg-rose-600 dark:bg-gray-700 text-gray-50 flex justify-between items-center px-4">
            <Link to="/" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
            </Link>

            <p>Search</p>
        </div>
    </div>
    )
}

export default SearchPage;