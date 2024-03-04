import { useState } from "react"
import "./App.css"

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  function incrCount() {
    setCount((c) => c + step)
  }

  function decrCount() {
    setCount((c) => c - step)
  }

  function resetAll() {
    setCount(0)
    setStep(1)

  }

  const date = new Date()
  date.setDate(date.getDate() + count)

  const messagestring = () => {
    if (count === 0) return "Today is "
    else if (count === 1) return `${count} day from today is `
    else if (count > 1) return `${count} days from today is `
    else if (count === -1) return `${Math.abs(count)} day ago was `
    else if (count < -1) return `${Math.abs(count)} days ago was `
  }

  return(
    <>
      <div className="steps">
        <input 
          type="range" 
          name="range" 
          id="range" 
          min={0} max={10} value={step} 
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <label htmlFor="range">{step}</label>
      </div>
      <div className="counts">
        <button className="button" onClick={decrCount}>-</button>
        <input 
          type="text" 
          name="count" 
          id="count" 
          value={count} 
          onChange={(e) => setCount(() => Number(e.target.value))}
        />
        <button className="button" onClick={incrCount}>+</button>
      </div>
      <p className="msg">
        {messagestring()}
        {date.toDateString()}
      </p>
      <div className="reset-button">
        {(count !== 0 || step !== 1) && <input 
          type="reset" 
          value="Reset"
          onClick={resetAll}
        />}
      </div>
    </>
  )
}

export default App