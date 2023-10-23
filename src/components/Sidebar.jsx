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
            status_message: 'Let me show you what it is to fall',
            profile_picture: 'https://static.zerochan.net/Morgana.%28League.of.Legends%29.full.3708469.jpg'
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
        <nav className="h-screen w-full lg:w-96 float-left flex flex-col bg-white dark:bg-zinc-800 border-r-2 border-rose-600 dark:border-zinc-700">
            <div className="h-20 relative flex justify-between items-center px-6 py-2 bg-rose-600 dark:bg-zinc-700">
                <p className="text-zinc-50 text-xl">Greetings, <span className="font-bold">[USER]</span>.</p>
                <div className="h-16 w-16 bg-zinc-300 dark:bg-zinc-500 border-2 border-zinc-50 rounded-full cursor-pointer" onClick={handleDropdown}></div>

                <div className="dropdown transition-all w-full absolute top-full right-full flex flex-col pt-px bg-white dark:bg-zinc-800 border-x-0 border-y border-rose-600 dark:border-x-0 dark:border-y dark:border-zinc-800 text-lg shadow-md overflow-hidden z-10">
                    <p className="h-full w-full px-4 py-3 text-center hover:bg-rose-600 hover:text-zinc-50 dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:text-zinc-50 cursor-pointer" onClick={handleTheme}>
                        Change Theme
                        { theme === 'light' ?
                            <i className="fa-regular fa-moon ml-2"></i>
                            :
                            <i className="fa-regular fa-sun ml-2"></i>
                        }
                    </p>

                    <hr className="border-1 border-rose-600 dark:border-zinc-800"/>

                    <Link to="/user_name" className="h-full w-full px-4 py-3 text-center hover:bg-rose-600 hover:text-zinc-50 dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:text-zinc-50 cursor-pointer" onClick={handleDropdown}>
                        Profile
                        <i className="fa-regular fa-user ml-2"></i>
                    </Link>
                    
                    <hr className="border-1 border-rose-600 dark:border-zinc-800"/>
                    
                    <p className="h-full w-full px-4 py-3 text-center hover:bg-rose-600 hover:text-zinc-50 dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:text-zinc-50 cursor-pointer">
                        Logout
                        <i className="fa-solid fa-door-open ml-2"></i>
                    </p>
                </div>
            </div>

            <div className="h-4/5 dark:text-zinc-50">
                {friends.length ? (
                    //  shadow-[inset_0_0_10px_rgb(180,180,180)]
                    <ul className="h-full w-full px-4 py-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:flex-nowrap overflow-auto">
                        {friends.map((friend) => {
                            return (
                                <li className="w-full sm:w-auto lg:w-full rounded-lg flex gap-8 p-4 bg-white dark:bg-zinc-700 border border-rose-600 dark:border-zinc-700 transition-all hover:border-white hover:shadow-[0_4px_10px_rgb(210,210,210)] dark:hover:shadow-[0_4px_10px_rgb(30,30,30)] cursor-pointer">
                                    <img className="h-16 w-16 bg-zinc-100 dark:bg-zinc-500 border border-rose-600 rounded-full" src={friend.profile_picture} alt={`${friend.username}'s profile picture`}/>
                                    <div>
                                        <p>{friend.username}</p>
                                        <p>{friend.status_message}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <div className="h-full flex flex-col justify-center items-center gap-2 text-center px-4">
                        <LuBird className="fa-solid fa-dove text-[5rem] text-zinc-900 dark:text-zinc-50"></LuBird>
                        <p className="text-lg text-zinc-900 dark:text-zinc-50">It doesn't look like you've added any friends yet... Click the search button below to start finding people to say hello to!</p>
                    </div>
                )}
            </div>

            <div className="h-[10%] flex items-center justify-center border-t-2 border-rose-600 dark:border-zinc-700">
                <Link to="/search" className="bg-rose-600 hover:bg-rose-500 dark:bg-zinc-700 dark:hover:bg-zinc-600 px-4 py-2 text-zinc-50 rounded-lg text-lg">
                    Search
                    <i className="fa-solid fa-magnifying-glass ml-2"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Sidebar;