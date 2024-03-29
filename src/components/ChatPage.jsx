import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {  IoSend } from "react-icons/io5";
import Message from './Message';
import Loader from './Loader';

function ChatPage() {
    const messagesEnd = useRef(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = (e) => {
        e.preventDefault();

        if(message.trim() === '') {
            setMessage('');
            return;
        };

        setMessage('');
    }

    const scrollToLastMessage = () => {
        messagesEnd?.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        setShowLoader(true);

        setTimeout(() => {
            setMessages(sampleMessages);
            setShowLoader(false);
        }, 3000);
    }, [])

    useEffect(() => {
        scrollToLastMessage();
    }, [messages])

    return (
        <div className='h-screen w-full lg:w-auto absolute top-0 left-0 lg:relative flex flex-col bg-white dark:bg-gray-900 overflow-x-hidden overflow-y-auto'>
            <Link to="/" className='absolute top-4 left-4 lg:hidden bg-rose-600 hover:bg-rose-500 dark:bg-gray-700 dark:hover:bg-gray-600 text-white p-2 rounded-full z-30'>
                <AiOutlineArrowLeft className='text-2xl cursor-pointer'/>
            </Link>

            <div className='relative h-full flex flex-col text-gray-900 dark:text-gray-50 px-4 lg:px-6 py-4 lg:py-5 overflow-y-auto'>
                {!!messages.length && (
                    <>
                        {messages.map((message, index) => {
                            return (
                                <Message key={index} message={message}/>
                            )
                        })}
                    </>
                )}

                {showLoader && <Loader/>}
                
                <div className='float-left clear-both' ref={messagesEnd}></div>
            </div>

            <form className='flex justify-center items-center gap-4 px-2 py-3'>
                <input className='w-[80%] bg-white dark:bg-gray-800 text-lg text-black dark:text-gray-100 px-4 py-2 border-2 border-gray-200 dark:border-gray-800 focus:outline-none focus:border-rose-500 dark:focus:border-gray-500 rounded' placeholder="Type message here" value={message} onInput={handleMessage}/>

                <button className='flex justify-center items-center gap-2 bg-rose-600 hover:bg-rose-500 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-[0.85rem] sm:py-2 text-gray-50 rounded-lg text-lg outline-none' onClick={sendMessage} type='submit'>
                    <span className='hidden sm:block'>Send</span>
                    <IoSend/>
                </button>
            </form>
        </div>
    )
}

export default ChatPage;