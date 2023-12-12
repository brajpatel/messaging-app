function AddedFriend({ friend }) {
    return (
        <li className="w-full sm:w-auto lg:w-full rounded flex gap-6 px-4 py-3 md:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 hover:border-rose-600 dark:hover:border-gray-500 transition-all cursor-pointer">
            <div className={`relative h-14 w-14 md:h-[3.75rem] md:w-[3.75rem] lg:h-16 lg:w-16 bg-cover bg-center border border-rose-600 dark:border-gray-400 rounded-full overflow-hidden`} style={{backgroundImage: friend.profile_picture ? `url(${friend.profile_picture})` : `url('../public/default-pfp.png')`}}></div>
            <div className="overflow-hidden">
                <p className="text-[1.1rem] lg:text-lg font-bold">{friend.username}</p>
                <p className="opacity-80 overflow-hidden whitespace-nowrap text-ellipsis">{friend.status_message}</p>
            </div>
        </li>
    )
}

export default AddedFriend;