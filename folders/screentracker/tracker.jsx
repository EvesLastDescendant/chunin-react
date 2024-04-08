import { useState, useEffect } from 'react'

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowWidth
}

function WindowWidthTracker() {
    const windowWidth = useWindowWidth()

    return (
        <>
            <div className=" text-slate-500 text-center flex flex-col justify-center items-center h-10">
                <h2 className=' font-semibold'>Browser Window width: </h2>
                <h3 className=' text-2xl'>{windowWidth}</h3>
            </div>
        </>
    )
}

export default WindowWidthTracker