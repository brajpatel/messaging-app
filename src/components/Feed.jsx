import { useEffect } from "react";

function Feed() {

    const continueMouseTrail = () => {
        
    }

    useEffect(() => {
        const container = document.getElementById('container');
        const mouseTrail = document.getElementById('mouse-trail');

        container.addEventListener('mousemove', (e) => {
            mouseTrail.style.transform = `translateY(${e.offsetY - 10}px)`;
            mouseTrail.style.transform += `translateX(${e.offsetX - 10}px)`;
        })

    }, [])
    
    return (
        <div id="container" className='relative hidden lg:block lg:h-screen p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 overflow-hidden'>
            <p className="text-xl font-bold">Something interactive, a randome quote generator - fill up this space</p>

            <p>A quote just for you:</p>
            <p>That which is dreamed cannot be grasped. But work toward it day to day and you will find it in your hands.</p>

        </div>
    )
}

export default Feed;