/* eslint-disable react/prop-types */
function GetBill(props) {
    return (
        <>
            <label>
                <span>How much&apos;s the bill ? </span>
                <input type="text" name="num" id="num" value={props.amount} onChange={props.inputChange} />💲
            </label>
        </>
    )
}

export default GetBill