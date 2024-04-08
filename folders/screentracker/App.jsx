import { useState } from 'react'
import './App.css'
import WindowWidthTracker from './tracker';

function App() {
  const [showUi, setShowUi]  = useState(false)

  const toogleUi = () => {
    setShowUi((showui) => !showui)
  }
  return (
    <>
      <div className="flex flex-col g-5 justify-center items-center h-screen">
      <button className="mb-5 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={toogleUi}>
        Click to Toogle Browser Window Width
      </button>
      {showUi && <WindowWidthTracker />}
    </div>
    </>
  )
}

export default App
