/* eslint-disable react/prop-types */
import AccordionItem from "./components/accordionItem"
import { faqs } from './accdb';


function Accordion({data}) {
  return (
    <>
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem title={el.title} text={el.text} key={el.title} num={i} />
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