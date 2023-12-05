import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';

function DeleteProfile() {
    const userId = useParams();

    const deleteAccount = () => {
        // delete account - userId.userid
    }

    return (
        <div className='h-screen lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative lg:p-3 flex flex-col bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto'>
            <div className="min-h-[4.4rem] md:h-[4.6rem] lg:h-auto w-full flex justify-between items-center lg:justify-center px-4 lg:py-4 font-bold bg-rose-600 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 text-gray-50 lg:text-gray-900 dark:text-gray-50">
                <Link to="/" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                    <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
                </Link>

                <p className='text-lg lg:text-xl lg:underline'>Delete Profile</p>
            </div>
            
            <div className='w-4/5 lg:w-full xl:w-max flex flex-col items-center mx-auto mt-4 md:mt-8 px-4 py-8 md:py-10 lg:px-20 text-gray-900 dark:text-gray-100 border-2 border-gray-400 hover:border-rose-500 dark:border-gray-700 dark:hover:border-gray-500 rounded transition-colors text-lg'>
                <p className="mb-2 text-lg md:text-xl font-bold text-center underline">Danger Zone:</p>
                <p className="text-center">Please carefully read the following before continuing as once you delete your account, there is no going back.</p>
                <p className="text-center mb-2">By proceeding, you understand that:</p>

                <ol className="list-disc">
                    <li>You will be removed from all users friends list</li>
                    <li>All chats involving you and their messages will be deleted</li>
                    <li>Any posts you created will be removed</li>
                </ol>

                <button className="bg-rose-600 hover:bg-rose-500 dark:bg-rose-600 dark:hover:bg-rose-700 px-4 py-2 mt-6 text-gray-50 rounded text-lg outline-none" onClick={deleteAccount}>
                    Delete Account
                    <i className="fa-regular fa-trash-can ml-2"></i>
                </button>
            </div>
        </div>
    )
}

export default DeleteProfile;