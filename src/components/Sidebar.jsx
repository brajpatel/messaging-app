function Sidebar({ handleTheme }) {
    return (
        <nav className="h-screen w-1/4 flex flex-col shadow-lg dark:shadow-none bg-white">
            <div className="flex justify-between items-center px-2 py-2 bg-rose-600">
                <a href="https://github.com/brajpatel" target="_blank" className="flex flex-col items-center justify-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                        <img className="w-16 h-16" src="/logo.png" alt="logo"/>
                </a>

                <div className="flex items-center gap-4">
                    <p className="text-zinc-50">[USER]</p>
                    <div className="h-16 w-16 border-2 border-zinc-50 rounded-full"></div>
                </div>
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
            <p>bruh</p>
        </nav>
    )
}

export default Sidebar;