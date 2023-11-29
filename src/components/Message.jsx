import { useState, useEffect } from "react";

function Message({ message, dateSent, user }) {
    const [dateTime, setDateTime] = useState(null);

    useEffect(() => {
        let str = message.date_sent.split('T');
        let date = str[0].split('-').reverse().join('-');
        let time = str[1].split('.')[0];

        setDateTime(date + ' - ' + time);
    }, [])

    return (
        <div className={`flex ${message.user ? 'flex-row-reverse justify-end' : ''} gap-3 mb-4 break-words`}>
            <div className='h-[2.75rem] min-w-[2.75rem] md:min-w-[3rem] xl:h-[3.75rem] xl:min-w-[3.75rem]  bg-cover bg-center border border-rose-600 dark:border-gray-400 rounded-full overflow-hidden' style={{backgroundImage: `url('https://i.pinimg.com/564x/fd/56/3b/fd563b26fb28a70d2b262a39af322655.jpg')`}}></div>
            
            <div className={`w-full ${message.user ? 'flex flex-col items-end' : ''}`}>
                <p className="text-gray-600 dark:text-gray-400 lg:text-lg mb-1">{dateTime}</p>
                <div className={`w-max max-w-[87.5%] md:max-w-[70%] lg:text-lg px-3 md:px-4 py-2 ${message.user ? 'bg-rose-600 dark:bg-rose-600 text-gray-50' : 'bg-gray-200 dark:bg-gray-800'} rounded`}>
                    {message.message}
                </div>
            </div>
        </div>
    )
}

export default Message;