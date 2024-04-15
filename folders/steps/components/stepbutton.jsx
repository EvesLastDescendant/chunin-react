/* eslint-disable react/prop-types */
export const StepButton = (props) => {
    return(
        <>
            <button className="btn" onClick={props.clickfunc}>{props.buttontext}</button>
        </>
    )
}