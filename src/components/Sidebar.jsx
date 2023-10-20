import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ theme, handleTheme }) {
    const [showDropdown, setShowDropdown] = useState(false);

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
        <nav className="h-screen w-1/4 flex flex-col shadow-lg dark:shadow-none bg-white dark:bg-zinc-900">
            <div className="relative flex justify-between items-center px-6 py-2 bg-rose-600 dark:bg-zinc-800">
                <p className="text-zinc-50 text-xl">Greetings, <span className="font-bold">[USER]</span>.</p>
                <div className="h-16 w-16 bg-zinc-300 border-2 border-zinc-50 rounded-full cursor-pointer" onClick={handleDropdown}></div>

                <div className="dropdown transition-all w-full absolute top-full right-full flex flex-col pt-px bg-white dark:bg-zinc-700 border-x-0 border-y border-rose-600 dark:border-x-0 dark:border-y dark:border-zinc-700 text-lg shadow overflow-hidden z-10">
                    <p className="h-full w-full px-4 py-2 text-center hover:bg-rose-600 hover:text-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-50 cursor-pointer" onClick={handleTheme}>
                        Change Theme
                        { theme === 'light' ?
                            <i className="fa-regular fa-moon ml-2"></i>
                            :
                            <i className="fa-regular fa-sun ml-2"></i>
                        }
                    </p>

                    <hr className="border-1 border-rose-600 dark:border-zinc-700"/>

                    <Link to="/user_name" className="h-full w-full px-4 py-2 text-center hover:bg-rose-600 hover:text-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-50 cursor-pointer" onClick={handleDropdown}>
                        Profile
                        <i className="fa-regular fa-user ml-2"></i>
                    </Link>
                    
                    <hr className="border-1 border-rose-600 dark:border-zinc-700"/>
                    
                    <p className="h-full w-full px-4 py-2 text-center hover:bg-rose-600 hover:text-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-50 cursor-pointer">
                        Logout
                        <i className="fa-solid fa-door-open ml-2"></i>
                    </p>
                </div>
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