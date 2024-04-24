/* eslint-disable react/prop-types */
function TotalAmt (props) {
    return (
        <>
            {props.amount > 0 && <h3>You pay💲{props.amount + props.tip} {`(💲${props.amount} + 💲${props.tip} tip)`}</h3>}
        </>
    )
}
export default TotalAmt