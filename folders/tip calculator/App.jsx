import { useEffect, useState } from "react"
// import GetPercent from "./components/percentage"
import GetInput from "./components/priceinput"
import Reset from "./components/resetbutton"
import TotalAmt from "./components/totalprice"
import GetCustomerTip from "./components/cusTip"
import GetFriendTip from "./components/cusFrTip"

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

  function handleSelectOne (e) {
    setPercOne(Number(e.target.value))
  }

  function handleSelectTwo(e) {
    setPercTwo(Number(e.target.value))
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
          <div><GetInput amount={amount} inputChange={inputChange} /></div>
          <div><GetCustomerTip percOne={percOne} onchange={handleSelectOne}>How did you like the service ? </GetCustomerTip></div>
          <div><GetFriendTip percTwo={percTwo} onchange={handleSelectTwo}>How did your friend like the service ? </GetFriendTip></div>
          <div><TotalAmt tip={tip} amount={amount} /></div>
          <div><Reset onclick={cleanSlate} /></div>
        </div>
      </div>
    </>
  )
}

export default App