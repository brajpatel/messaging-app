import { Link } from "react-router-dom";
import { BsHouseDoor } from 'react-icons/bs';

function Dropdown({ showDropdown, handleDropdown, theme, handleTheme }) {
    return (
        <div className={showDropdown ?
            'transition-all w-full absolute top-full right-0 flex flex-col pt-px bg-white dark:bg-gray-800 border-x-0 border-y border-rose-600 dark:border-x-0 dark:border-y dark:border-gray-800 text-lg shadow-md overflow-hidden z-10'
            :
            'transition-all w-full absolute top-full right-full flex flex-col pt-px bg-white dark:bg-gray-800 border-x-0 border-y border-rose-600 dark:border-x-0 dark:border-y dark:border-gray-800 text-lg shadow-md overflow-hidden z-10'}
        >
            <Link to="/" className="hidden lg:block h-full w-full py-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-50 cursor-pointer transition-colors" onClick={handleDropdown}>
                Home
                <BsHouseDoor className="inline-block ml-2"/>
            </Link>

            <hr className="border-1 border-rose-600 dark:border-gray-800"/>

            <Link to="/username" className="h-full w-full py-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-50 cursor-pointer transition-colors" onClick={handleDropdown}>
                Profile
                <i className="fa-regular fa-user ml-2"></i>
            </Link>
            
            <hr className="border-1 border-rose-600 dark:border-gray-800"/>

            <p className="h-full w-full py-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-50 cursor-pointer transition-colors" onClick={handleTheme}>
                Change Theme
                { theme === 'light' ?
                    <i className="fa-regular fa-moon ml-2"></i>
                    :
                    <i className="fa-regular fa-sun ml-2"></i>
                }
            </p>

            <hr className="border-1 border-rose-600 dark:border-gray-800"/>
            
            <p className="h-full w-full py-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-50 cursor-pointer transition-colors">
                Logout
                <i className="fa-solid fa-door-open ml-2"></i>
            </p>
        </div>
    )
}

export default Dropdown;