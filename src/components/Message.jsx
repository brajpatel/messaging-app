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
        <div className={`h-auto flex ${message.user ? 'flex-row-reverse justify-end self-end' : ''} gap-3 mb-4`}>
            {/* DISPLAY DEFAULT PICTURE FOR EITHER USER OR FRIEND */}
            <div className='h-[2rem] min-w-[2rem] md:h-[2.6rem] md:min-w-[2.6rem] xl:h-[3.2rem] xl:min-w-[3.2rem] self-end bg-cover bg-center border border-rose-600 dark:border-gray-400 rounded-full overflow-hidden' style={{backgroundImage: `url('https://i.pinimg.com/564x/fd/56/3b/fd563b26fb28a70d2b262a39af322655.jpg')`}}></div>
            
            {/* CHECK IF THE MESSAGE NAME MATCHES THE USER NAME TO DETERMINE WHICH SET OF CLASSES THE MESSAGE GETS */}
            <div className={`${message.user ? 'flex flex-col items-end pl-[1.5rem] sm:pl-[5rem] lg:pl-[10rem]' : 'pr-[1.5rem] sm:pr-[5rem] lg:pr-[10rem]'}`}>
                <p className="text-gray-600 dark:text-gray-400 lg:text-lg mb-1">{dateTime}</p>
                <p className={`max-w-max lg:text-lg px-3 md:px-4 py-2 ${message.user ? 'bg-rose-600 dark:bg-rose-600 text-gray-50' : 'bg-gray-200 dark:bg-gray-800'} rounded break-words`}>
                    {message.message}
                </p>
            </div>
        </div>
    )
}

export default Message;