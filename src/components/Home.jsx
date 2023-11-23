import { useEffect } from "react";

function Home() {

    const continueMouseTrail = () => {
        
    }

    useEffect(() => {
        const container = document.getElementById('container');
        const mouseTrail = document.querySelector('.mouse-trail');

        container.addEventListener('mousemove', (e) => {
            mouseTrail.style.transform = `translateY(${e.offsetY - 10}px)`;
            mouseTrail.style.transform += `translateX(${e.offsetX - 10}px)`;
        }, false)

    }, [])
    
    return (
        <div id="container" className='relative hidden lg:block lg:h-screen p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 overflow-hidden'>
            <p className="text-xl font-bold">Something interactive, a randome quote generator - fill up this space</p>

            <p>A quote just for you:</p>
            <p>That which is dreamed cannot be grasped. But work toward it day to day and you will find it in your hands.</p>

            <div className="mouse-trail h-[20px] w-[20px] absolute top-0 left-0 bg-black rounded-full transition"></div>
        </div>
    )
}

export default Home;