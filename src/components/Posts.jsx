import { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { PiPushPin } from "react-icons/pi";
import Post from "./Post";
import Loader from './Loader';

function Posts() {
    const [postMessage, setPostMessage] = useState('');
    const [posts, setPosts] = useState();
    const [showLoader, setShowLoader] = useState(false);

    const handlePostMessage = (e) => {
        setPostMessage(e.target.value);
    }

    const createPost = (e) => {
        e.preventDefault();

        if(postMessage.trim() === '') {
            setPostMessage('');
            return;
        }

        // call api with the form data
        // call fetch posts to refresh them
        
        setPostMessage('');
    }

    const fetchPosts = async () => {
        const response = await fetch('https://messaging-app-api.fly.dev/post', { mode: 'no-cors' });
        
        if(response.ok) {
            const data = await response.json();
            setPosts(data);
            setShowLoader(false);
        }
    }

    useEffect(() => {
        setShowLoader(true);
        fetchPosts();
    }, [])

    return (
        <div id="container" className='relative hidden lg:block lg:h-full lg:px-2 xl:px4 pt-2 pb-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 overflow-x-hidden overflow-y-auto'>
            <form className="flex justify-center items-center gap-3 py-3">
                <input className='w-[80%] bg-white dark:bg-gray-800 text-lg text-black dark:text-gray-100 px-4 py-2 border-2 border-gray-200 dark:border-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded' placeholder="What's on your mind today..." maxLength="120" value={postMessage} onInput={handlePostMessage} required={true}/>

                <button className='flex justify-center items-center gap-2 bg-rose-600 hover:bg-rose-500 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-[0.85rem] sm:py-2 text-gray-50 rounded-lg text-lg outline-none' onClick={createPost} type='submit'>
                    Post
                    <IoSend/>
                </button>
            </form>

            <div className="relative min-h-[8rem] max-h-max lg:w-[90%] xl:w-[85%] mx-auto mt-1 mb-5 rounded flex bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-800 hover:border-rose-600 dark:hover:border-gray-500 transition-all overflow-hidden select-none">
                <PiPushPin className="absolute top-3 right-3 text-xl"/>

                <div className={`relative lg:min-w-[25%] xl:min-w-[20%] bg-cover bg-center overflow-hidden`} style={{backgroundImage: `url('https://pbs.twimg.com/media/DkvFqyqXgAAFY5z.jpg')`}}></div>

                <div className="w-full flex flex-col justify-center gap-2 py-2 2xl:py-3">
                    <p className="2xl:text-[1.05rem] pl-4 pr-10">
                        Welcome to my Messaging App! If you're reading this then it means you've taken the time to create an account and I really appreciate that. I hope you have a smooth experience navigating around and making use of the app's features, and once again, thank you.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-right pr-8 font-bold italic"><span className="mr-2">-</span>Sip, from TOP</p>
                </div>
            </div>

            <ul className="lg:w-[90%] lg:flex lg:flex-col lg:items-center lg:gap-3 2xl:w-[95%] 2xl:grid 2xl:grid-cols-2 2xl:justify-items-center 2xl:gap-x-6 2xl:gap-y-6 mx-auto">
                {posts && (
                    <>
                        {posts.map((post, index) => {
                            return (
                                <Post key={index} post={post}/>
                            )
                        })}
                    </>
                )}

                {showLoader && <Loader/>}
            </ul>
        </div>
    )
}

export default Posts;