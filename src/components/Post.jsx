function Post({ post }) {
    return (
        <li className="h-[8rem] w-full rounded flex gap-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 hover:border-rose-600 dark:hover:border-gray-500 transition-all cursor-pointer">
            <div className="h-full w-1/5">
                <div className={`relative h-full w-full bg-cover bg-center overflow-hidden`} style={{backgroundImage: `url(${post.profile_picture})`}}></div>
            </div>
        </li>
    )
}

export default Post;