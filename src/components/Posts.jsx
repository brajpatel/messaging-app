import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { PiPushPin } from "react-icons/pi";
import Post from "./Post";

function Posts() {
    const [postMessage, setPostMessage] = useState('');
    const [posts, setPosts] = useState(null);
    const [examplePosts, setExamplePosts] = useState([
        {
            username: 'Ashe',
            message: 'All the world.. on one arrow.',
            date_created: new Date().toISOString(),
            profile_picture: 'https://64.media.tumblr.com/91b159df9a8c606c4fd5a74427d2aa9c/b9116db0ab4711c9-77/s500x750/01bd6c7a8791be7f6f6e4b7afee2424cf671bd53.png',
        },
        {
            username: 'Jhin',
            message: 'In carnage I bloom, like a flower in the dawn.',
            date_created: new Date().toISOString(),
            profile_picture: 'https://i.pinimg.com/1200x/9d/00/4c/9d004c40630c28c54e1bc37d10b35657.jpg',
        },
        {
            username: 'Nasus',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem voluptas, vel earum cumque id! Alias est maxime inventore ad.',
            date_created: new Date().toISOString(),
            profile_picture: 'https://i.pinimg.com/564x/0e/d8/54/0ed8549cbf8d409bc3b90731085f865d.jpg',
        },
        {
            username: 'Jinx',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem voluptas, vel earum cumque id! Alias est maxime inventore ad.',
            date_created: new Date().toISOString(),
            profile_picture: 'https://wallpapers-clan.com/wp-content/uploads/2023/07/league-of-legends-jinx-pfp-01.jpg',
        },
        {
            username: 'Irelia',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem voluptas, vel earum cumque id! Alias est maxime inventore ad.',
            date_created: new Date().toISOString(),
            profile_picture: 'https://i.pinimg.com/564x/fd/56/3b/fd563b26fb28a70d2b262a39af322655.jpg',
        }
    ])

    const handlePostMessage = (e) => {
        setPostMessage(e.target.value);
    }

    const createPost = (e) => {
        e.preventDefault();

        if(postMessage.trim() === '') {
            setPostMessage('');
            return;
        }

        setExamplePosts((prev) => [{ username: 'Sip', message: postMessage, date_created: new Date().toISOString(), profile_picture: 'https://yurireviewsandmore.files.wordpress.com/2018/05/knbcpv1.jpg'}, ...prev]);
        setPostMessage('');
    }

    return (
        <div id="container" className='relative hidden lg:block lg:h-full p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 overflow-x-hidden overflow-y-auto'>
            <form className="flex justify-center items-center gap-3 py-3">
                <input className='w-[80%] bg-white dark:bg-gray-800 text-lg text-black dark:text-gray-100 px-4 py-2 border-2 border-gray-200 dark:border-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded' placeholder="What's on your mind today..." value={postMessage} onInput={handlePostMessage}/>

                <button className='flex justify-center items-center gap-2 bg-rose-600 hover:bg-rose-500 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-[0.85rem] sm:py-2 text-gray-50 rounded-lg text-lg outline-none' onClick={createPost} type='submit'>
                    Post
                    <IoSend/>
                </button>
            </form>

            <div className="relative min-h-[8rem] max-h-max lg:w-[95%] xl:w-[85%] mx-auto mt-1 mb-4 rounded flex bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-800 hover:border-rose-600 dark:hover:border-gray-500 transition-all overflow-hidden select-none">
                <PiPushPin className="absolute top-3 right-3 text-xl"/>

                <div className={`relative lg:min-w-[25%] xl:min-w-[20%] bg-cover bg-center overflow-hidden`} style={{backgroundImage: `url('https://pbs.twimg.com/media/DkvFqyqXgAAFY5z.jpg')`}}></div>

                <div className="w-full flex flex-col justify-center gap-2 py-2 2xl:py-3">
                    <p className="2xl:text-[1.05rem] lg:px-5 xl:px-8">Welcome to my Messaging App!</p>
                    <p className="text-gray-600 dark:text-gray-300 text-right pr-8 font-bold italic"><span className="ml-2">-</span>Sip</p>
                </div>
            </div>

            <ul className="lg:w-[95%] lg:flex lg:flex-col lg:items-center lg:gap-3 2xl:w-[95%] 2xl:grid 2xl:grid-cols-2 2xl:justify-items-center 2xl:gap-x-6 2xl:gap-y-6 mx-auto">
                {examplePosts.map((post, index) => {
                    return (
                        <Post key={index} post={post}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts;