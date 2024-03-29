import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuBird } from 'react-icons/lu';
import Dropdown from "./Dropdown";
import AddedFriend from "./AddedFriend";
import Loader from "./Loader";

const exampleFriends = [
    {
        _id: '2jb2vhj3b21jkb',
        username: 'Neeko',
        status_message: 'Neeko is best decision!',
        profile_picture: 'https://static.zerochan.net/Neeko.%28League.of.Legends%29.full.3688255.jpg'
    },
    {
        _id: 'fio34nk3n2jb',
        username: 'Morgana',
        status_message: 'Support Slay',
        profile_picture: 'https://static.zerochan.net/Morgana.%28League.of.Legends%29.full.3708469.jpg'
    },
    {
        _id: 'f9hiosdnfin',
        username: 'Kayle',
        status_message: 'I am the Light!',
    }
]

function Sidebar({ theme, handleTheme, logout }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [friends, setFriends] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    useEffect(() => {
        setShowLoader(true);

        setTimeout(() => {
            setFriends(exampleFriends);
            setShowLoader(false);
        }, 3000);
    }, [])

    return (
        <nav className="h-screen w-full lg:w-[21rem] xl:w-96 float-left flex flex-col bg-white dark:bg-gray-900 lg:border-r-2 border-rose-600 dark:border-gray-800">
            <div className="h-[4.4rem] md:h-[4.6rem] lg:h-20 relative flex justify-between items-center px-6 md:py-6 lg:py-3 xl:py-4 bg-rose-600 dark:bg-gray-800">
                <p className="text-gray-50 text-lg lg:text-xl">Hello, <span className="font-bold">[USER]</span>.</p>

                <div className='h-14 min-w-[3.5rem] md:h-[3.75rem] md:min-w-[3.75rem] lg:h-[4.2rem] lg:min-w-[4.2rem] bg-cover bg-center bg-gray-300 dark:bg-gray-500 border-2 border-gray-200 dark:border-gray-50 cursor-pointer rounded-full' style={{backgroundImage: 'url(https://yurireviewsandmore.files.wordpress.com/2018/05/knbcpv1.jpg)'}} onClick={handleDropdown}></div>

                <Dropdown showDropdown={showDropdown} handleDropdown={handleDropdown} theme={theme} handleTheme={handleTheme} logout={logout}/>
            </div>

            <div className="relative h-4/5 dark:text-gray-50">
                {friends.length ? (
                    <ul className="h-full w-full px-4 py-5 flex flex-col gap-3 lg:flex lg:flex-col lg:flex-nowrap overflow-x-hidden overflow-y-auto">
                        {friends.map((friend) => {
                            return (
                                <AddedFriend key={friend._id} friend={friend}/>
                            )
                        })}
                    </ul>
                ) : showLoader ? (
                    <Loader/>
                ) : (
                    <div className="h-full flex flex-col justify-center items-center gap-2 text-center px-4">
                        <LuBird className="fa-solid fa-dove text-[5rem] text-gray-900 dark:text-gray-50"></LuBird>
                        <p className="text-lg text-gray-900 dark:text-gray-50">It doesn't look like you've added any friends yet... Click the search button below to start finding people to say hello to!</p>
                    </div>
                )}
            </div>

            <div className="h-[10%] flex items-center justify-center border-t-2 border-rose-600 dark:border-gray-800">
                <Link to="/search" className="bg-rose-600 hover:bg-rose-500 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2 text-gray-50 rounded text-lg" onClick={() => setShowDropdown(false)}>
                    Search
                    <i className="fa-solid fa-magnifying-glass ml-2"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Sidebar;