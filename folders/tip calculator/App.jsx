import { useEffect, useState } from "react"
import GetBill from "./components/inputBill"
import Reset from "./components/resetbutton"
import TotalBill from "./components/totalBill"
import GetCustomerTip from "./components/cusTip"

const App = () => {

  const [amount, setAmount] = useState('')
  const [percOne, setPercOne]  = useState('')
  const [percTwo, setPercTwo] = useState('')
  const [tip, setTip] = useState('')

  useEffect(() => {
    aveTip(percOne, percTwo)
  })

  function inputChange(e) {
    setAmount(Number(e.target.value))
  }

  function aveTip (t1, t2) {
    const average = Number((t1 + t2) / 2)
    setTip(average)
  }

  function cleanSlate() {
    setAmount('')
    setPercOne('')
    setPercTwo('')
    setTip('')
  }

  return (
    <>
      <div className="container">
        <h1>Tip calculator</h1>
        <div className="info">
          <div><GetBill amount={amount} inputChange={inputChange} /></div>
          <div><GetCustomerTip percentage={percOne} onSelect={setPercOne}>How did you like the service ? </GetCustomerTip></div>
          <div><GetCustomerTip percentage={percTwo} onSelect={setPercTwo}>How did your friend like the service ? </GetCustomerTip></div>
          <div><TotalBill tip={tip} amount={amount} /></div>
          <div><Reset onclick={cleanSlate} /></div>
        </div>
      </div>
    </>
  )
}

export default App
