/* eslint-disable react/prop-types */
function GetCustomerTip(props) {
    return (
        <>
            <label>
                <span>{props.children}</span>
                <select value={props.percentage} name="select" onChange={(e) => props.onSelect(Number(e.target.value))}> 
                    <option value={0}>Dissatisfied (0%)</option>
                    <option value={5}>It was okay (5%)</option>
                    <option value={10}>It was good (10%)</option>
                    <option value={20}>Absolutely amazing (20%)</option>
                </select>
            </label>
        </>
    )
}

export default GetCustomerTip