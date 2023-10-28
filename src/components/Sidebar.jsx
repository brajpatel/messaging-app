import { useState } from "react";
import { Link } from "react-router-dom";
import { LuBird } from 'react-icons/lu';
import Dropdown from "./Dropdown";

function Sidebar({ theme, handleTheme }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [friends, setFriends] = useState([
        {
            username: 'Neeko',
            status_message: 'Neeko is best decision!',
            profile_picture: 'https://static.zerochan.net/Neeko.%28League.of.Legends%29.full.3688255.jpg'
        },
        {
            username: 'Morgana',
            status_message: 'Support Slay',
            profile_picture: 'https://static.zerochan.net/Morgana.%28League.of.Legends%29.full.3708469.jpg'
        },
        {
            username: 'Kayle',
            status_message: 'I am the Light!',
            profile_picture: "https://i.pinimg.com/474x/c6/34/47/c63447bd8b594a51593e06d763084d37.jpg"
        }
    ]);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <nav className="h-screen w-full lg:w-96 float-left flex flex-col bg-white dark:bg-gray-800 lg:border-r-2 border-rose-600 dark:border-gray-700">
            <div className="h-[4.4rem] md:h-[4.6rem] lg:h-20 relative flex justify-between items-center px-6 md:py-6 lg:py-3 xl:py-4 bg-rose-600 dark:bg-gray-700">
                <p className="text-gray-50 text-lg lg:text-xl">Greetings, <span className="font-bold">[USER]</span>.</p>
                <img className="h-14 w-14 md:h-[3.75rem] md:w-[3.75rem] lg:h-[4.2rem] lg:w-[4.2rem] rounded-full bg-gray-300 dark:bg-gray-500 border-2 border-gray-200 dark:border-gray-50 cursor-pointer" src="https://yurireviewsandmore.files.wordpress.com/2018/05/knbcpv1.jpg" alt="user-profile-picture" onClick={handleDropdown}/>

                <Dropdown showDropdown={showDropdown} handleDropdown={handleDropdown} theme={theme} handleTheme={handleTheme}/>
            </div>

            <div className="h-4/5 dark:text-gray-50">
                {friends.length ? (
                    <ul className="h-full w-full px-4 py-5 flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:auto-rows-max lg:flex lg:flex-col lg:flex-nowrap overflow-x-hidden overflow-y-auto">
                        {friends.map((friend, index) => {
                            return (
                                <li key={index} className="w-full sm:w-auto lg:w-full rounded flex gap-6 px-4 py-3 md:py-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-800 transition-all hover:border-rose-600 dark:hover:border-gray-400 cursor-pointer">
                                    <div className={`relative h-14 w-14 md:h-[3.75rem] md:w-[3.75rem] lg:h-16 lg:w-16 bg-cover bg-center border border-rose-600 dark:border-gray-800 rounded-full overflow-hidden`} style={{backgroundImage: `url(${friend.profile_picture})`}}></div>
                                    <div className="overflow-hidden">
                                        <p className="text-[1.1rem] lg:text-lg font-bold">{friend.username}</p>
                                        <p className="opacity-80 overflow-hidden whitespace-nowrap text-ellipsis">{friend.status_message}</p>
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