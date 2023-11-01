import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function NotFound() {
    return (
        <div className='h-screen lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative lg:p-3 flex flex-col items-center bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto'>
            <div className='w-full lg:flex lg:flex-col lg:items-center lg:px-2 lg:py-4'>
                <div className="h-[4.4rem] md:h-[4.6rem] lg:h-auto w-full lg:w-auto font-bold bg-rose-600 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 text-gray-50 lg:text-gray-900 dark:text-gray-50 flex justify-between items-center px-4 lg:p-0">
                    <Link to="/" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                        <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
                    </Link>

                    <p className='lg:text-xl'>Uh oh... it looks like you're lost</p>
                </div>
            </div>

            <div className='w-full'>
                404
            </div>
                
        </div>
    )
}

export default NotFound;