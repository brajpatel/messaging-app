import { useState } from "react";
import { Link } from "react-router-dom";
import { LuBird } from 'react-icons/lu';

function Sidebar({ theme, handleTheme }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [friends, setFriends] = useState([
        {
            username: 'Neeko',
            status_message: 'Neeko is best decision',
            profile_picture: 'https://static.zerochan.net/Neeko.%28League.of.Legends%29.full.3688255.jpg'
        },
        {
            username: 'Morgana',
            status_message: 'Bing Chilling',
            profile_picture: 'https://static.zerochan.net/Morgana.%28League.of.Legends%29.full.3708469.jpg'
        },
        {
            username: 'Kayle',
            status_message: 'I am the Light',
            profile_picture: "https://i.pinimg.com/474x/c6/34/47/c63447bd8b594a51593e06d763084d37.jpg"
        }
    ]);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);

        const dropdown = document.querySelector('.dropdown');

        if(showDropdown)  {
            dropdown.classList.add('right-0')
            dropdown.classList.remove('right-full');
        }
        else  {
            dropdown.classList.add('right-full')
            dropdown.classList.remove('right-0');
        }
    }

    return (
        <nav className="h-screen w-full lg:w-96 float-left flex flex-col bg-white dark:bg-gray-800 lg:border-r-2 border-rose-600 dark:border-gray-700">
            <div className="h-[4.4rem] md:h-[4.6rem] lg:h-20 relative flex justify-between items-center px-6 md:py-6 lg:py-3 xl:py-4 bg-rose-600 dark:bg-gray-700">
                <p className="text-gray-50 text-lg lg:text-xl">Greetings, <span className="font-bold">[USER]</span>.</p>
                <img className="h-14 w-14 md:h-[3.75rem] md:w-[3.75rem] lg:h-[4.2rem] lg:w-[4.2rem] rounded-full bg-gray-300 dark:bg-gray-500 border-2 border-gray-50 cursor-pointer" src="https://yurireviewsandmore.files.wordpress.com/2018/05/knbcpv1.jpg" alt="user-profile-picture" onClick={handleDropdown}/>

                <div className="dropdown transition-all w-full absolute top-full right-full flex flex-col pt-px bg-white dark:bg-gray-800 border-x-0 border-y border-rose-600 dark:border-x-0 dark:border-y dark:border-gray-800 text-lg shadow-md overflow-hidden z-10">
                    <p className="h-full w-full py-2 lg:p-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-50 cursor-pointer" onClick={handleTheme}>
                        Change Theme
                        { theme === 'light' ?
                            <i className="fa-regular fa-moon ml-2"></i>
                            :
                            <i className="fa-regular fa-sun ml-2"></i>
                        }
                    </p>

                    <hr className="border-1 border-rose-600 dark:border-gray-800"/>

                    <Link to="/user_name" className="h-full w-full py-2 lg:p-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-50 cursor-pointer" onClick={handleDropdown}>
                        Profile
                        <i className="fa-regular fa-user ml-2"></i>
                    </Link>
                    
                    <hr className="border-1 border-rose-600 dark:border-gray-800"/>
                    
                    <p className="h-full w-full py-2 lg:p-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-50 cursor-pointer">
                        Logout
                        <i className="fa-solid fa-door-open ml-2"></i>
                    </p>
                </div>
            </div>

            <div className="h-4/5 dark:text-gray-50">
                {friends.length ? (
                    //  shadow-[inset_0_0_10px_rgb(180,180,180)]
                    <ul className="h-full w-full px-4 py-5 flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:auto-rows-max lg:flex lg:flex-col lg:flex-nowrap overflow-auto">
                        {friends.map((friend, index) => {
                            return (
                                <li key={index} className="w-full sm:w-auto lg:w-full rounded-lg flex gap-8 px-4 py-3 md:py-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-800 transition-all hover:border-rose-600 dark:hover:border-gray-500 cursor-pointer">
                                    <img className="h-12 w-12 md:h-16 md:w-16 bg-gray-100 dark:bg-gray-500 border border-rose-600 dark:border-gray-800 rounded-full" src={friend.profile_picture} alt={`${friend.username}'s profile picture`}/>
                                    <div>
                                        <p className="lg:text-lg font-bold">{friend.username}</p>
                                        <p className="opacity-80">{friend.status_message}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <div className="h-full flex flex-col justify-center items-center gap-2 text-center px-4">
                        <LuBird className="fa-solid fa-dove text-[5rem] text-gray-900 dark:text-gray-50"></LuBird>
                        <p className="text-lg text-gray-900 dark:text-gray-50">It doesn't look like you've added any friends yet... Click the search button below to start finding people to say hello to!</p>
                    </div>
                )}
            </div>

            <div className="h-[10%] flex items-center justify-center border-t-2 border-rose-600 dark:border-gray-700">
                <Link to="/search" className="bg-rose-600 hover:bg-rose-500 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 text-gray-50 rounded-lg text-lg">
                    Search
                    <i className="fa-solid fa-magnifying-glass ml-2"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Sidebar;