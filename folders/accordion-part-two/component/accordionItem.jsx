/* eslint-disable react/prop-types */
const AccordionItem = (props) => {
    const isOpen = props.num === props.accordionCurrentlyOpen

    function handleToggle() {
        props.onOpen(isOpen ? null : props.num)
    }
    return (
        <>
            <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
                <p className="number">{props.num < 9 ? `0${props.num + 1}` : props.num + 1}</p>
                <p className="title">{props.title}</p>
                <p className="icon">{isOpen ? '-' : '+'}</p>
                {isOpen && <div className="content-box">{props.text}</div>}
            </div>
        </>
    )
}

export default AccordionItem