import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';

function ProfileEdit() {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [statusMessage, setStatusMessage] = useState(null);
    const [profilePicture, setProfilePicture] = useState('https://yurireviewsandmore.files.wordpress.com/2018/05/knbcpv1.jpg');

    const handleProfilePicture = (e) => {
        if(profilePicture) setProfilePicture(null);

        setProfilePicture(URL.createObjectURL(e.target.files[0]));
    }

    const removeProfilePicture = () => {
        setProfilePicture(null);
    }

    return (
        <div className='lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative lg:px-4 lg:py-3 flex flex-col bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto'>
            <div className="h-[4.4rem] md:h-[4.6rem] lg:h-auto w-full flex justify-between items-center lg:justify-center px-4 lg:py-4 font-bold bg-rose-600 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-800 text-gray-50 lg:text-gray-900 dark:text-gray-50">
                <Link to="/username" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                    <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
                </Link>

                <p className='text-lg lg:text-xl lg:underline'>Edit Profile</p>
            </div>
            
            <div className='w-4/5 lg:w-full 2xl:w-max flex flex-col items-center gap-4 sm:gap-5 md:gap-12 lg:gap-16 md:flex-row md:justify-center lg:justify-between mx-auto mt-4 mb-4 md:mt-10 lg:mt-6 px-4 py-8 md:px-8 md:py-10 xl:px-16 text-gray-900 dark:text-gray-100 border-2 border-gray-400 hover:border-rose-500 dark:border-gray-700 dark:hover:border-gray-500 rounded transition-colors'>
                {profilePicture ? (
                    <div className='flex flex-col items-center gap-4'>
                        <div className='min-h-[40vw] min-w-[40vw] sm:min-h-[30vw] sm:min-w-[30vw] md:min-h-[14rem] md:min-w-[14rem] lg:min-h-[16rem] lg:min-w-[16rem] bg-cover bg-center bg-gray-300 dark:bg-gray-500 border-2 border-rose-500 dark:border-gray-200 transition-all rounded-full' style={{backgroundImage: `url(${profilePicture})`}}></div>

                        <button className='bg-gray-700 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-50 text-lg lg:text-xl px-3 py-1 lg:px-4 lg:py-[0.35rem] flex justify-center items-center rounded cursor-pointer' onClick={removeProfilePicture}>
                            Remove <i className="fa-solid fa-xmark ml-2"></i>
                        </button>
                    </div>
                ) : (
                    <div className='min-h-[40vw] min-w-[40vw] sm:min-h-[30vw] sm:min-w-[30vw] md:min-h-[14rem] md:min-w-[14rem] lg:min-h-[16rem] lg:min-w-[16rem] bg-cover bg-center bg-gray-300 dark:bg-gray-500 border-2 border-gray-400 dark:border-gray-200 transition-all rounded-full' style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg)'}}></div>
                )}

                <div>
                    <form className='flex flex-col gap-2'>
                        <div>
                            <label className="text-lg dark:text-gray-100" htmlFor="username">Username</label>
                            <input className='bg-white dark:bg-gray-800 block text-lg text-black dark:text-gray-100 w-full px-4 py-2 mt-2 border-2 border-gray-200 dark:border-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded' type="text" name="username" id="username"/>
                        </div>

                        <div>
                            <label className="text-lg dark:text-gray-100" htmlFor="status_message">Status Message</label>
                            <input className='bg-white dark:bg-gray-800 block text-lg text-black dark:text-gray-100 w-full px-4 py-2 mt-2 border-2 border-gray-200 dark:border-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded' type="text" name="status_message" id="status_message"/>
                        </div>

                        <div>
                            <label className="text-lg dark:text-gray-100" htmlFor="profile_picture">Profile Picture</label>
                            <input className='bg-white dark:bg-gray-800 text-lg text-black dark:text-gray-100 w-full px-4 py-2 mt-2 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded' type="file" name="profile_picture" id="profile_picture" onChange={handleProfilePicture} />
                        </div>
                    </form>

                    <div className='flex flex-wrap justify-center gap-4 mt-8'>
                        <button className='bg-green-500 hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 text-gray-50 text-lg lg:text-xl px-3 py-1 lg:px-4 lg:py-2 rounded outline-none' type='button'>
                            Save Changes
                            <i className="fa-solid fa-check ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit;