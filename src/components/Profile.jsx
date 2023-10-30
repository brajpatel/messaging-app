import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function Profile() {
    return (
        <div className='h-screen lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative lg:p-3 flex flex-col bg-white dark:bg-gray-800 overflow-x-hidden overflow-y-auto'>
            <div className="h-[4.4rem] md:h-[4.6rem] lg:h-auto w-full flex justify-between items-center lg:justify-center px-4 lg:py-4 font-bold bg-rose-600 lg:bg-white dark:bg-gray-700 lg:dark:bg-gray-800 text-gray-50 lg:text-gray-900 dark:text-gray-50">
                <Link to="/" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                    <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
                </Link>

                <p className='text-lg lg:text-xl lg:underline'>Profile</p>
            </div>
            
            <div className='flex flex-col items-center gap-3 md:flex-row px-2 py-4 text-gray-900 dark:text-gray-100'>
                <div className='min-h-[40vw] min-w-[40vw] sm:min-h-[30vw] sm:min-w-[30vw] bg-cover bg-center bg-gray-300 dark:bg-gray-500 border-2 border-rose-500 dark:border-gray-200 transition-all rounded-full' style={{backgroundImage: 'url(https://yurireviewsandmore.files.wordpress.com/2018/05/knbcpv1.jpg)'}}></div>

                <div className='flex flex-col items-center'>
                    <p>[USERNAME]</p>
                    <p className='mt-2 mb-4'>[STATUS_MESSAGE]</p>
                    <button className='bg-green-500 hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 text-gray-50 text-lg lg:text-xl px-2 py-1 rounded outline-none' type='button'>Edit <i className="fa-regular fa-pen-to-square"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Profile;