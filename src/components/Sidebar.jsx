import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ handleTheme }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <nav className="h-screen w-1/4 flex flex-col shadow-lg dark:shadow-none bg-white">
            <div className="relative flex justify-between items-center px-6 py-2 bg-rose-600">
                <p className="text-zinc-50 text-xl">Greetings, <span className="font-bold">[USER]</span>.</p>
                <div className="h-16 w-16 bg-rose-400 border-2 border-zinc-50 rounded-full cursor-pointer" onClick={handleDropdown}></div>

                {showDropdown && (
                    <div className="w-32 absolute top-full right-2 mt-2 flex flex-col bg-white border-2 border-rose-600 shadow rounded-md overflow-hidden z-10">
                        <p className="h-full w-full px-4 py-2 text-center hover:bg-rose-600 hover:text-zinc-50 cursor-pointer">
                            Theme
                            {/* { theme === 'light' ? '' : ''} */}
                        </p>
                        <Link to="/user_name" className="h-full w-full px-4 py-2 text-center hover:bg-rose-600 hover:text-zinc-50 cursor-pointer">Profile</Link>
                        <p className="h-full w-full px-4 py-2 text-center hover:bg-rose-600 hover:text-zinc-50 cursor-pointer">Logout</p>
                    </div>
                )}  
            </div>

            <ul>
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