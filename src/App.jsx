import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Preloader from './components/preloader/Preloader'
import Home from './pages/home'

function App() {
    const [loadingComplete, setLoadingComplete] = useState(false)

    const handleLoadingComplete = () => {
        setLoadingComplete(true)
    }

    if (!loadingComplete) {
        return <Preloader onComplete={handleLoadingComplete} />
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default App
