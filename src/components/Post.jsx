function Post({ post }) {
    return (
        <li className="h-[6.5rem] lg:w-full rounded flex gap-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 hover:border-rose-600 dark:hover:border-gray-500 transition-all cursor-pointer overflow-hidden">
                <div className={`relative h-full lg:w-[25%] xl:w-[20%] bg-cover bg-center overflow-hidden`} style={{backgroundImage: `url(${post.profile_picture})`}}></div>
        </li>
    )
}

export default Post;