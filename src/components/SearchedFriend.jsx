import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineUserDelete } from 'react-icons/ai';

function SearchedFriend({ friend, fetchFriends }) {
    const checkIfFriend = () => {
    // WHEN MAPPING OVER ALL USERS, CHECK IF EACH ONE IS IN THE LOGGED IN USER'S FRIENDS LIST
    }

    const addFriend = () => {
        fetch('https://messaging-app-api.fly.dev/friend/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userid: '',
                friendid: friend._id
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .finally(() => {
            fetchFriends();
        })

    }

    const removeFriend = () => {
        fetch('https://messaging-app-api.fly.dev/friend/remove', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userid: '',
                friendid: friend._id
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .finally(() => {
            fetchFriends();
        })
    }

    return (
        <li className="relative w-full sm:w-auto rounded flex gap-6 px-4 pr-14 py-3 md:py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 transition-all hover:border-rose-600 dark:hover:border-gray-500">
            <div className='h-14 min-w-[3.5rem] md:h-[3.75rem] md:min-w-[3.75rem] lg:h-16 lg:min-w-[4rem] bg-cover bg-center border border-rose-600 dark:border-gray-400 rounded-full float-left overflow-hidden' style={{backgroundImage: friend.profile_picture ? `url(${friend.profile_picture})` : `url('/default-pfp.png')`}}></div>

            <div className='float-none overflow-hidden'>
                <p className="text-[1.1rem] lg:text-lg font-bold">{friend.username}</p>
                <p className="opacity-80 overflow-hidden whitespace-nowrap text-ellipsis">{friend.status_message}</p>
            </div>

            {friend.isFriend ? (
                <div className='bg-red-500 hover:bg-red-400 dark:bg-red-600 dark:hover:bg-red-700 text-gray-50 text-lg lg:text-xl p-1 absolute top-1/2 right-4 translate-y-[-50%] rounded-full cursor-pointer' onClick={removeFriend}>
                    <AiOutlineUserDelete/>
                </div>
                ) : (
                <div className='bg-green-500 hover:bg-green-400 dark:bg-green-500 dark:hover:bg-green-600 text-gray-50 text-lg lg:text-xl p-1 absolute top-1/2 right-4 translate-y-[-50%] rounded-full cursor-pointer' onClick={addFriend}>
                    <AiOutlineUserAdd/>
                </div>
            )}
        </li>
    )
}

export default SearchedFriend;