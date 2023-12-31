import { Link } from "react-router-dom";
import { BsCollection } from "react-icons/bs";

function Dropdown({ showDropdown, handleDropdown, theme, handleTheme, logout }) {
    return (
        <div className={showDropdown ?
            'transition-all w-full absolute top-full right-0 flex flex-col bg-white dark:bg-gray-900 border-x-0 border-t border-t-white border-b border-b-rose-600 dark:border-x-0 dark:border-y dark:border-gray-900 text-lg shadow-[0_8px_10px_rgba(0,0,0,0.5)] overflow-hidden z-10'
            :
            'transition-all w-full absolute top-full right-full flex flex-col bg-white dark:bg-gray-900 border-x-0 border-t border-t-white border-b border-rose-600 dark:border-x-0 dark:border-y dark:border-gray-900 text-lg shadow-md overflow-hidden z-10'}
        >
            <Link to="/" className="hidden lg:block h-full w-full py-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-gray-50 cursor-pointer transition-colors" onClick={handleDropdown}>
                Posts
                <BsCollection className="inline-block ml-2"/>
            </Link>

            <hr className="border-1 border-rose-600 dark:border-gray-900"/>

            <Link to="/account/username" className="h-full w-full py-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-gray-50 cursor-pointer transition-colors" onClick={handleDropdown}>
                Profile
                <i className="fa-regular fa-user ml-2"></i>
            </Link>
            
            <hr className="border-1 border-rose-600 dark:border-gray-900"/>

            <p className="h-full w-full py-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-gray-50 cursor-pointer transition-colors" onClick={handleTheme}>
                Change Theme
                { theme === 'light' ?
                    <i className="fa-regular fa-moon ml-2"></i>
                    :
                    <i className="fa-regular fa-sun ml-2"></i>
                }
            </p>

            <hr className="border-1 border-rose-600 dark:border-gray-900"/>
            
            <button className="h-full w-full py-3 text-center hover:bg-rose-600 hover:text-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-gray-50 cursor-pointer transition-colors outline-none" onClick={logout}>
                Logout
                <i className="fa-solid fa-door-open ml-2"></i>
            </button>
        </div>
    )
}

export default Dropdown;