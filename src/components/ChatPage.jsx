import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoSend } from "react-icons/io5";
import Message from './Message';
import { useState } from 'react';

function ChatPage() {
    const [messages, setMessages] = useState([
        {
            message: 'First message, hello',
            date_sent: new Date().toISOString(),
            user: true
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, aliquam quam consectetur quidem nobis maxime repellendus. Quod, corrupti veritatis?',
            date_sent: new Date().toISOString(),
            user: false
        },
        {
            message: 'Okay then',
            date_sent: new Date().toISOString(),
            user: true
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, aliquam quam consectetur quidem nobis maxime repellendus. Quod, corrupti veritatis?',
            date_sent: new Date().toISOString(),
            user: true
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur repellendus. Quod, corrupti veritatis?',
            date_sent: new Date().toISOString(),
            user: false
        },
        {
            message: 'First message, hello',
            date_sent: new Date().toISOString(),
            user: true
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, aliquam quam consectetur quidem nobis maxime repellendus. Quod, corrupti veritatis?',
            date_sent: new Date().toISOString(),
            user: false
        },
        {
            message: 'Okay then',
            date_sent: new Date().toISOString(),
            user: true
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, aliquam quam consectetur quidem nobis maxime repellendus. Quod, corrupti veritatis?',
            date_sent: new Date().toISOString(),
            user: true
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur repellendus. Quod, corrupti veritatis?',
            date_sent: new Date().toISOString(),
            user: false
        },
    ])

    return (
        <div className='h-screen w-full lg:w-auto absolute top-0 left-0 lg:relative flex flex-col bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto'>
            <Link to="/" className='absolute top-4 left-4 lg:hidden bg-rose-600 hover:bg-rose-500 dark:bg-gray-700 dark:hover:bg-gray-600 text-white p-2 rounded-full'>
                <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
            </Link>

            <div className='h-full text-gray-900 dark:text-gray-50 px-4 lg:px-6 py-4 lg:py-5 overflow-y-auto'>
                {messages.map((message, index) => {
                    return (
                        <Message key={index} message={message.message} dateSent={message.date_sent} user={message.user}/>
                    )
                })}
            </div>

            <form className='flex justify-center items-center gap-4 px-2 py-3'>
                <input className='w-[80%] bg-white dark:bg-gray-800 text-lg text-black dark:text-gray-100 px-4 py-2 border-2 border-gray-200 dark:border-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded' placeholder="Type message here"/>

                <button className='flex justify-center items-center gap-2 bg-rose-600 hover:bg-rose-500 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-[0.85rem] sm:py-2 text-gray-50 rounded-lg text-lg outline-none' type='submit'>
                    <span className='hidden sm:block'>Send</span>
                    <IoSend/>
                </button>
            </form>
        </div>
    )
}

export default ChatPage;