import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineUserDelete } from 'react-icons/ai';

function SearchPage() {
    const [friends, setFriends] = useState([
        {
            username: 'Ashe',
            status_message: 'All the world on one arrow',
            profile_picture: 'https://64.media.tumblr.com/91b159df9a8c606c4fd5a74427d2aa9c/b9116db0ab4711c9-77/s500x750/01bd6c7a8791be7f6f6e4b7afee2424cf671bd53.png'
        },
        {
            username: 'Jhin',
            status_message: 'In carnage I bloom, like a flower in the dawn',
            profile_picture: 'https://i.pinimg.com/1200x/9d/00/4c/9d004c40630c28c54e1bc37d10b35657.jpg'
        },
        {
            username: 'Nasus',
            status_message: 'Hehe',
            profile_picture: 'https://i.pinimg.com/564x/0e/d8/54/0ed8549cbf8d409bc3b90731085f865d.jpg'
        },
        {
            username: 'Jinx',
            status_message: 'Rules are made to be broken!',
            profile_picture: 'https://wallpapers-clan.com/wp-content/uploads/2023/07/league-of-legends-jinx-pfp-01.jpg'
        },
        {
            username: 'Irelia',
            status_message: 'Blade dancer slay',
            profile_picture: 'https://i.pinimg.com/564x/fd/56/3b/fd563b26fb28a70d2b262a39af322655.jpg'
        }
    ])

    return (
        <div className='h-screen lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative lg:p-3 flex flex-col items-center bg-white dark:bg-gray-800 overflow-x-hidden overflow-y-auto'>
            <div className='w-full lg:flex lg:flex-col lg:items-center lg:px-2 lg:py-4'>
                <div className="h-[4.4rem] md:h-[4.6rem] lg:h-auto w-full lg:w-auto font-bold bg-rose-600 lg:bg-white dark:bg-gray-700 lg:dark:bg-gray-800 text-gray-50 lg:text-gray-900 dark:text-gray-50 flex justify-between items-center px-4 lg:p-0">
                    <Link to="/" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                        <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
                    </Link>

                    <p className='block lg:hidden text-lg lg:underline'>Search</p>

                    <p className='hidden lg:block lg:text-xl lg:underline'>Search for friends</p>


                </div>

                <div className='w-[90%] sm:w-3/5 md:w-1/2 xl:w-1/3 mx-auto flex justify-center items-center py-4 lg:p-2'>
                    <input className='w-full bg-white dark:bg-gray-700 text-lg text-black dark:text-gray-100 px-4 py-2 mt-2 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-rose-500 dark:focus:border-gray-400 rounded text-center' placeholder="Search by username"/>
                </div>
            </div>

            <div className='w-full'>
                <ul className="h-full w-full dark:text-gray-50 px-4 py-5 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 overflow-x-hidden overflow-y-auto">
                        {friends.map((friend, index) => {
                            return (
                                <li key={index} className="relative w-full sm:w-auto lg:w-full rounded flex gap-6 px-4 py-3 md:py-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-800 transition-all hover:border-rose-600 dark:hover:border-gray-400">
                                    <div className={`h-14 w-14 md:h-[3.75rem] md:w-[3.75rem] lg:h-16 lg:w-16 bg-cover bg-center border border-rose-600 dark:border-gray-800 rounded-full overflow-hidden`} style={{backgroundImage: `url(${friend.profile_picture})`}}></div>

                                    <div className="overflow-hidden">
                                        <p className="text-[1.1rem] lg:text-lg font-bold">{friend.username}</p>
                                        <p className="opacity-80 overflow-hidden whitespace-nowrap text-ellipsis">{friend.status_message}</p>
                                    </div>

                                    <div className=' text-gray-50 flex justify-center items-center absolute top-1/2 right-6 translate-y-[-50%] text-lg lg:text-xl rounded-full cursor-pointer'>
                                        {null ? (
                                            <AiOutlineUserAdd className='bg-green-400 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-600'/>
                                        ) : (
                                            <AiOutlineUserDelete className='bg-red-500 hover:bg-red-400 dark:bg-red-600 dark:hover:bg-red-700'/>
                                        )}
                                    </div>
                                </li>
                            )
                        })}
                </ul>
            </div>
                
        </div>
    )
}

export default SearchPage;