import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const getTimeBasedGreeting = () => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) {
        return 'Good Morning'
    } else if (hour >= 12 && hour < 18) {
        return 'Good Afternoon'
    } else {
        return 'Good Evening'
    }
}

const Preloader = ({ onComplete }) => {
    const greetings = [
        'Hello',
        'Ciao',
        'Olà',
        'やあ',
        'Hallå',
        'Hallo',
        getTimeBasedGreeting(),
    ]

    const [currentIndex, setCurrentIndex] = useState(greetings.length - 1)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex - 1
                if (nextIndex < 0) {
                    clearInterval(interval)
                    onComplete()
                }
                return Math.max(nextIndex, 0)
            })
        }, 400) // Change greeting every 400ms

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div className={`flex items-center justify-center h-screen bg-black`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-4xl italic  tracking-widest"
                >
                    {greetings[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Preloader
