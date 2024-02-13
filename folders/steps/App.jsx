import './App.css'
import Message from './components/message'
import ComponentButton from './feature/compbtn'
import { useState } from 'react'
import { PreviousButton, NextButton } from './components/stepbutton';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]

function App() {
  const [isOpen, setIsOpen] = useState(true)

  function openComponent() {
      setIsOpen(!isOpen)
  }

  const [step, setStep] = useState(1)

  function nextStep() {
    if (step < 3) setStep(step + 1)
  }

  function prevStep() {
    if (step > 1) setStep(step - 1)
  }

  return (
    <>
      <ComponentButton 
        isOpen={isOpen}
        buttonClick={openComponent}
      />
      {!isOpen && <div className='steps'>
        <div className='numbers'>
          <div className={step >= 1 ? 'active' : ''}>1</div>
          <div className={step >= 2 ? 'active' : ''}>2</div>
          <div className={step >= 3 ? 'active' : ''}>3</div>
        </div>
        <Message msg={`Step ${step}: ${messages[step - 1]}`}/>
        <div className='buttons'>
          <PreviousButton buttontext={`Previous`} clickfunc={prevStep}/>
          <NextButton buttontext={`Next`} clickfunc={nextStep}/>
        </div>
      </div>}
    </>
  )
}

export default App
