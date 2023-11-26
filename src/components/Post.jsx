function Post({ post }) {
    return (
        <li className="min-h-[6.5rem] h-full xl:h-full lg:w-full rounded flex bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 hover:border-rose-600 dark:hover:border-gray-500 transition-all overflow-hidden select-none">
                <div className={`relative lg:min-w-[25%] xl:min-w-[20%] bg-cover bg-center overflow-hidden`} style={{backgroundImage: `url(${post.profile_picture})`}}></div>

                <div className="w-full flex flex-col justify-center py-2">
                    <p className="lg:px-5 xl:px-3">{post.message}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-right italic pr-8">- {post.username}</p>
                </div>
        </li>
    )
}

export default Post;