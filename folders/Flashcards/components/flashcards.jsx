function FlashCards(props) {
    return (
        <>
            <div className="flashcards">
                {props.questionarray.map(question => (
                    <div 
                        key={question.id} 
                        className={question.id === props.id ? "selected" : ""}
                        onClick={() => props.clickEvent(question.id)}
                    >
                        <p>{question.id === props.id ? question.answer : question.question}</p>
                    </div>
                ))} 
            </div>
        </>
    )
}

export default FlashCards