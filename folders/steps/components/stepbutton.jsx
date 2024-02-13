export const PreviousButton = (props) => {
    return(
        <>
            <button className="btn" onClick={props.clickfunc}>{props.buttontext}</button>
        </>
    )
}

export const NextButton = (props) => {
    return(
        <>
            <button className="btn" onClick={props.clickfunc}>{props.buttontext}</button>
        </>
    )
}