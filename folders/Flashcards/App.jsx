import { useState } from "react"
import FlashCards from "./components/flashcards"
import { questions } from './utils/questiondb';
import "./App.css"

function App() {
  const [selectedId, setSelectedId] = useState(null)

  function toggleCard(id) {
    setSelectedId(id !== selectedId ? id : null)
  }

  return(
    <>
      <div className="app">
        <FlashCards questionarray={questions} id={selectedId} clickEvent={toggleCard}/>
      </div>
    </>
  )
}

export default App