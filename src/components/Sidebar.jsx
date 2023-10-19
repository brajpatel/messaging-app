function Sidebar({ handleTheme }) {
    return (
        <nav className="h-screen w-1/4 bg-rose-300 text-zinc-50">
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