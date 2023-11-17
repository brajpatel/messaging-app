import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SearchedFriend from './SearchedFriend';

function SearchPage() {
    const [friends, setFriends] = useState([
        {
            username: 'Ashe',
            status_message: 'All the world on one arrow',
            profile_picture: 'https://64.media.tumblr.com/91b159df9a8c606c4fd5a74427d2aa9c/b9116db0ab4711c9-77/s500x750/01bd6c7a8791be7f6f6e4b7afee2424cf671bd53.png',
            isFriend: false
        },
        {
            username: 'Jhin',
            status_message: 'In carnage I bloom, like a flower in the dawn',
            profile_picture: 'https://i.pinimg.com/1200x/9d/00/4c/9d004c40630c28c54e1bc37d10b35657.jpg',
            isFriend: false
        },
        {
            username: 'Nasus',
            status_message: 'Hehe',
            profile_picture: 'https://i.pinimg.com/564x/0e/d8/54/0ed8549cbf8d409bc3b90731085f865d.jpg',
            isFriend: false
        },
        {
            username: 'Jinx',
            status_message: 'Rules are made to be broken!',
            profile_picture: 'https://wallpapers-clan.com/wp-content/uploads/2023/07/league-of-legends-jinx-pfp-01.jpg',
            isFriend: false
        },
        {
            username: 'Irelia',
            status_message: 'Blade dancer slay',
            profile_picture: 'https://i.pinimg.com/564x/fd/56/3b/fd563b26fb28a70d2b262a39af322655.jpg',
            isFriend: false
        }
    ])
    const [searchedFriends, setSearchedFriends] = useState(friends);

    const handleSearch = (e) => {
        setSearchedFriends(friends.filter((friend) => {
            return friend.username.toLowerCase().startsWith(e.target.value);
        }));
    }

    return (
        <div className='h-screen lg:h-full w-full lg:w-auto absolute top-0 left-0 lg:relative lg:p-3 flex flex-col items-center bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto'>
            <div className='w-full lg:flex lg:flex-col lg:items-center lg:px-2 lg:py-4'>
                <div className="min-h-[4.4rem] md:h-[4.6rem] lg:h-auto w-full lg:w-auto font-bold bg-rose-600 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 text-gray-50 lg:text-gray-900 dark:text-gray-50 flex justify-between items-center px-4 lg:p-0">
                    <Link to="/" className='block lg:hidden hover:bg-[rgb(255,255,255,0.4)] dark:hover:bg-[rgb(255,255,255,0.2)] p-2 rounded-full'>
                        <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
                    </Link>

                    <p className='block lg:hidden text-lg lg:underline'>Search</p>

                    <p className='hidden lg:block lg:text-xl xl:text-2xl lg:underline'>Search for friends</p>
                </div>

                <div className='w-[90%] sm:w-3/5 md:w-1/2 xl:w-1/3 mx-auto flex justify-center items-center py-4 lg:p-2'>
                    <input className='w-full bg-white dark:bg-gray-800 text-lg text-black dark:text-gray-100 px-4 py-2 mt-2 border-2 border-gray-200 dark:border-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded text-center' placeholder="Search by username" onInput={handleSearch}/>
                </div>
            </div>

            <div className='w-full'>
                    {searchedFriends.length ? (
                        <ul className="h-full w-full dark:text-gray-50 px-4 py-5 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 overflow-x-hidden overflow-y-auto">
                            {searchedFriends.map((friend, index) => {
                                return (
                                    <SearchedFriend key={index} friend={friend}/>
                                )
                            })}
                        </ul>
                    ) : (
                        <div className='flex flex-col items-center gap-6 md:g-12 lg:gap-14 mt-2 px-2'>
                            <p className='w-4/5 text-gray-900 dark:text-gray-100 text-xl lg:text-2xl text-center font-bold'>It doesn't look like there are any users with that name!</p>
                            <div className='w-52 md:w-64 xl:w-72'>
                                <svg
                                className='fill-gray-900 dark:fill-gray-100'
                                xmlns="http://www.w3.org/2000/svg"
                                shapeRendering="geometricPrecision"
                                textRendering="geometricPrecision"
                                imageRendering="optimizeQuality"
                                fillRule="evenodd"
                                clipRule="evenodd" 
                                viewBox="0 0 512 406.8">
                                    <path d="M29.27 0h373.81c16.11 0 29.27 13.16 29.27 29.27v90.8c-2.23-1.1-4.48-2.14-6.77-3.13l-2.02-.92c-3.57-1.47-7.18-2.82-10.84-4.02V81.94h.14H20.83v221.61c0 4.5 3.59 8.09 8.09 8.09h193.04c.54 1.42 1.1 2.83 1.69 4.24 1.97 4.78 4.23 9.49 6.73 14.09H29.27C13.16 329.97 0 316.78 0 300.7V29.27C0 13.16 13.16 0 29.27 0zm335.71 140.37c31.07 0 60.75 12.29 82.72 34.27 30.33 30.33 41.62 75.06 29.4 116.14-2.83 9.53-6.85 18.55-11.88 26.89l45.3 49.38c2.09 2.27 1.95 5.82-.33 7.91l-33.26 30.38c-2.27 2.08-5.8 1.92-7.89-.35l-43.34-47.67c-18.35 11.18-39.22 17.02-60.72 17.02-31.06 0-60.75-12.3-82.71-34.27a117.18 117.18 0 0 1-25.39-37.99c-18.13-43.67-7.82-94.22 25.4-127.43a116.814 116.814 0 0 1 37.96-25.4c13.8-5.73 28.92-8.88 44.74-8.88zm70.93 46.04c-28.63-28.63-72.03-37.24-109.31-21.8-66.92 27.71-82.3 113.99-32.58 163.67 28.68 28.61 72 37.26 109.33 21.81 37.54-15.59 61.94-52.1 61.94-92.74 0-13.62-2.69-26.59-7.56-38.37a101.013 101.013 0 0 0-21.82-32.57zm-28.22 97.67-16.4 16.31-26.48-26.49-26.34 26.34-15.82-15.86 26.32-26.32-26.85-26.84 16.4-16.31 26.8 26.81 26.51-26.51 15.81 15.85-26.49 26.49 26.54 26.53zM375.21 32.9c7.99 0 14.46 6.47 14.46 14.46 0 7.98-6.47 14.46-14.46 14.46-7.98 0-14.46-6.48-14.46-14.46.04-7.99 6.51-14.46 14.46-14.46zm-97.95 0c7.99 0 14.46 6.47 14.46 14.46 0 7.98-6.47 14.46-14.46 14.46-7.99 0-14.46-6.48-14.46-14.46 0-7.99 6.47-14.46 14.46-14.46zm48.98 0c7.98 0 14.45 6.47 14.45 14.46 0 7.98-6.47 14.46-14.45 14.46-7.99 0-14.47-6.48-14.47-14.46 0-7.99 6.48-14.46 14.47-14.46z"/>
                                </svg>
                            </div>

                        </div>
                    )}
            </div>
                
        </div>
    )
}

export default SearchPage;