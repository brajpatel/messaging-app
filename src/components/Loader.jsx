import './Loader.css';

function Loader() {
    return (
        <div className='loader-container'>
            <div className="loader-bot bg-[#e11d4840] dark:bg-[#6b728048] border border-rose-600 dark:border-gray-500"></div>
            <div className="loader-top-1 bg-[#e11d4859] dark:bg-[#6b728059] border border-rose-600 dark:border-gray-500"></div>
            <div className="loader-top-2 bg-[#e11d4866] dark:bg-[#6b728066] border border-rose-600 dark:border-gray-500"></div>
        </div>
    )
}

export default Loader;