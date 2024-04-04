import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/form'
import Logo  from './components/logo'
import PackingList from './components/packinglist'
import Stats from './components/stats'



function App() {
    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [itemsArr, setItemsArr] = useState([])

    useEffect(() => {
        console.log(itemsArr)
    }, [itemsArr])

    function addItems(item) {
        setItemsArr((itemsArr) => [...itemsArr, item])
    }

    function deleteItems(id) {
        setItemsArr((itemsArr) => itemsArr.filter((item) => item.id !== id ))
    }

    function handleCheckToogle(id) {
        setItemsArr((itemsArr) => itemsArr.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(!item) return

        const newitem = {item, quantity, packed: false, id: Date.now()}
        
        console.log(`new item added: ${JSON.stringify(newitem)}`)

        addItems(newitem)

        setItem("")
        setQuantity(1)
    }
    
    function handleInputChange(e) {
        setItem(e.target.value)
    }

    function handleOptionChange(e) {
        setQuantity(Number(e.target.value))
    }

    function clearItems() {
        setItemsArr([])
    }

    return (
        <>
            <div className="app">
                <Logo />
                <Form 
                    input={item} 
                    option={quantity} 
                    optionchange={handleOptionChange} 
                    onchange={handleInputChange} 
                    submit={handleSubmit} 
                />
                <PackingList 
                    items={itemsArr} 
                    delete={deleteItems} 
                    oncheck={handleCheckToogle}
                    clearItems={clearItems}
                />
                <Stats array={itemsArr} />
            </div>
        </>
    )
}

export default App

