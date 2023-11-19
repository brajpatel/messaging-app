function Message({ message, user }) {
    return (
        <div className="mb-2">
            <div className={`${user ? 'bg-rose-500' : 'bg-gray-400'}`}>{message}</div>
        </div>
    )
}

export default Message;