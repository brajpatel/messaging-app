import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';

function DeleteProfile() {
    const userId = useParams();

    return (
        <div className='h-screen lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative lg:p-3 flex flex-col bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto'>
            <div className="min-h-[4.4rem] md:h-[4.6rem] lg:h-auto w-full flex justify-between items-center lg:justify-center px-4 lg:py-4 font-bold bg-rose-600 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 text-gray-50 lg:text-gray-900 dark:text-gray-50">
                <Link to="/" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                    <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
                </Link>

                <p className='text-lg lg:text-xl lg:underline'>Delete Profile</p>
            </div>
            
            <div className='w-4/5 lg:w-full xl:w-max flex flex-col items-center gap-4 sm:gap-5 md:gap-12 lg:gap-16 md:flex-row md:justify-center mx-auto mt-4 md:mt-8 px-4 py-8 md:py-10 lg:px-20 text-gray-900 dark:text-gray-100 border-2 border-gray-400 hover:border-rose-500 dark:border-gray-700 dark:hover:border-gray-500 rounded transition-colors'>
                <p>Danger Zone:</p>
                <p>Upon deleting your account, the following will occur:</p>

                <ol>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                </ol>
            </div>
        </div>
    )
}

export default DeleteProfile;