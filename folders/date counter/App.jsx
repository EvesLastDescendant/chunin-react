import { useState } from "react"
import "./App.css"

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)


  function incrStep() {
    setStep((s) => s + 1)
  }

  function decrStep() {
    if(step > 1) setStep((s) => s - 1)
  }

  function incrCount() {
    setCount((c) => c + step)
  }

  function decrCount() {
    setCount((c) => c - step)
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
        <button className="button" onClick={decrStep}>-</button>
        <p>Step: {step}</p>
        <button className="button" onClick={incrStep}>+</button>
      </div>
      <div className="counts">
        <button className="button" onClick={decrCount}>-</button>
        <p>Count: {count}</p>
        <button className="button" onClick={incrCount}>+</button>
      </div>
      <p className="msg">
        {messagestring()}
        {date.toDateString()}
      </p>
    </>
  )
}

export default App