/* eslint-disable react/prop-types */
function TotalBill (props) {
    return (
        <>
            {props.amount > 0 && <h3>You pay💲{props.amount + props.tip} {`(💲${props.amount} + 💲${props.tip} tip)`}</h3>}
        </>
    )
}
export default TotalBill