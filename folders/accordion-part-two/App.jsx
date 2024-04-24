/* eslint-disable react/prop-types */
import AccordionItem from "./components/accordionItem"
import { faqs } from './accdb';
import { useState } from "react";


function Accordion({data}) {
  const [accordionCurrentlyOpen, setAccordionCurrentlyOpen] = useState(null)

  return (
    <>
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem 
            accordionCurrentlyOpen={accordionCurrentlyOpen} 
            onOpen={setAccordionCurrentlyOpen} 
            title={el.title} 
            text={el.text} 
            key={el.title} 
            num={i} 
          />
        ))}
      </div>
    </>
  )
}
function App() {
  return (
    <>
      <Accordion data={faqs}/>
    </>
  )
}

export default App