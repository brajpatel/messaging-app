import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function Profile() {
    return (
        <div className='h-screen lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative lg:p-3 flex flex-col bg-white dark:bg-gray-800 overflow-x-hidden overflow-y-auto'>
            <div className="h-[4.4rem] md:h-[4.6rem] lg:h-auto w-full flex justify-between items-center lg:justify-center px-4 lg:py-4 font-bold bg-rose-600 lg:bg-white dark:bg-gray-700 lg:dark:bg-gray-800 text-gray-50 lg:text-gray-900 dark:text-gray-50">
                <Link to="/username" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                    <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
                </Link>

                <p className='text-lg lg:text-xl lg:underline'>Profile</p>
            </div>
            
            <div className='w-4/5 lg:w-max flex flex-col items-center gap-4 sm:gap-5 md:gap-12 lg:gap-16 md:flex-row md:justify-center mx-auto mt-4 md:mt-10 px-4 py-8 md:py-10 lg:px-20 text-gray-900 dark:text-gray-100 border-2 border-gray-400 hover:border-rose-500 dark:border-gray-700 dark:hover:border-gray-400 rounded transition-colors'>
                <div className='min-h-[40vw] min-w-[40vw] sm:min-h-[30vw] sm:min-w-[30vw] md:min-h-[14rem] md:min-w-[14rem] lg:min-h-[16rem] lg:min-w-[16rem] bg-cover bg-center bg-gray-300 dark:bg-gray-500 border-2 border-rose-500 dark:border-gray-200 transition-all rounded-full' style={{backgroundImage: 'url(https://yurireviewsandmore.files.wordpress.com/2018/05/knbcpv1.jpg)'}}></div>

                <div className='flex flex-col items-center text-center'>
                    <p className='text-lg lg:text-xl font-bold'>[USERNAME]</p>                    
                    <p className='lg:text-lg my-2'>[EMAIL]</p>
                    <p className='lg:text-lg my-2'>[STATUS_MESSAGE]</p>
                    <p className='lg:text-lg mt-2 mb-4'>Date joined: [DATE_JOINED]</p>
                    <Link to='/username/edit' className='bg-green-500 hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 text-gray-50 text-lg lg:text-xl px-3 py-1 lg:px-4 lg:py-2 rounded outline-none'>Edit <i className="fa-regular fa-pen-to-square"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Profile;