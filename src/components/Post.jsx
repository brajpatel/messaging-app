import { useState, useEffect } from "react";

function Post({ post }) {
    const [postDate, setPostDate] = useState(null);

    useEffect(() => {
        let str = post.date_created.split('T');
        let date = str[0].split('-').reverse().join('-');

        setPostDate(date);
    }, [])

    return (
        <li className="min-h-[8rem] h-full w-full rounded flex bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 hover:border-rose-600 dark:hover:border-gray-500 transition-all overflow-hidden select-none">
            <div className={`relative lg:min-w-[25%] xl:min-w-[20%] bg-cover bg-center overflow-hidden`} style={{backgroundImage: `url(${post.profile_picture})`}}></div>

            <div className="w-full flex flex-col justify-center gap-2 py-2 2xl:py-3">
                <p className="2xl:text-[1.05rem] lg:px-5 xl:px-3">{post.message}</p>
                <p className="text-gray-600 dark:text-gray-300 text-right pr-8 font-bold italic">{postDate}<span className="mx-2">-</span>{post.username}</p>
            </div>
        </li>
    )
}

export default Post;