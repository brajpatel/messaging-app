import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ theme, handleTheme }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <nav className="h-screen w-1/4 flex flex-col shadow-lg dark:shadow-none bg-white dark:bg-zinc-900">
            <div className="relative flex justify-between items-center px-6 py-2 bg-rose-600 dark:bg-zinc-800">
                <p className="text-zinc-50 text-xl">Greetings, <span className="font-bold">[USER]</span>.</p>
                <div className="h-16 w-16 bg-zinc-300 border-2 border-zinc-50 rounded-full cursor-pointer" onClick={handleDropdown}></div>

                {showDropdown && (
                    <div className="w-32 absolute top-full right-2 mt-2 flex flex-col bg-white border-2 border-rose-600 text-lg shadow rounded-md overflow-hidden z-10">
                        <p className="h-full w-full px-4 py-2 text-center hover:bg-rose-600 hover:text-zinc-50 cursor-pointer" onClick={handleTheme}>
                            { theme === 'light' ?
                                <i className="fa-regular fa-moon ml-2"></i>
                                :
                                <i className="fa-regular fa-sun ml-2"></i>
                            }
                        </p>
                        <Link to="/user_name" className="h-full w-full px-4 py-2 text-center hover:bg-rose-600 hover:text-zinc-50 cursor-pointer">
                            Profile
                            <i className="fa-regular fa-user ml-2"></i>
                        </Link>
                        <p className="h-full w-full px-4 py-2 text-center hover:bg-rose-600 hover:text-zinc-50 cursor-pointer">
                            Logout
                            <i className="fa-solid fa-door-open ml-2"></i>
                        </p>
                    </div>
                )}  
            </div>

            <ul className="text-zinc-900 dark:text-zinc-50">
                <li>Hello, [user] --------------------------------------------------- Profile picture</li>
                <li>.</li>
                <li>DROPDOWN</li>
                <li>Profile</li>
                <li>Theme</li>
                <li>Logout</li>
                <li>.</li>
                <li>Friends</li>
                <li>.</li>
                <li>If no friends</li>
                <li>No friends yet, add some</li>
                <li>.</li>
                <li>else</li>
                <li>Friend profile picture ----- friend name
                    <span className="block opacity-90">status message</span>
                </li>
                <li>SEARCH (goes to search page)</li>
            </ul>
        </nav>
    )
}

export default Sidebar;