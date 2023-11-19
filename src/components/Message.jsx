import { useState, useEffect } from "react";

function Message({ message, dateSent, user }) {
    const [dateTime, setDateTime] = useState(null);

    useEffect(() => {
        let str = dateSent.split('T');
        let date = str[0];
        let time = str[1].split('.')[0];

        setDateTime(date + ' - ' + time)
    }, [])

    return (
        <div className={`flex ${user ? 'justify-end' : ''} mb-4`}>
            <div className={`w-full ${user ? 'flex flex-col items-end' : ''}`}>
                <p className="lg:text-lg">{dateTime}</p>
                <div className={`w-max lg:text-lg px-3 md:px-4 py-2 ${user ? 'bg-rose-600 dark:bg-rose-600 text-gray-50' : 'bg-gray-200 dark:bg-gray-800'} rounded`}>
                    {message}
                </div>
            </div>
        </div>
    )
}

export default Message;