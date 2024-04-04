function Stats(props) {
    if(!props.array.length)
        return (
            <p className="stats">Let's get packing 🚀</p>
    )

    const itemsarraylength = props.array.length
    const packeditemsarraylength = props.array.filter((item) => item.packed === true).length
    const percent = Math.round((packeditemsarraylength / itemsarraylength) * 100) || 0
    
    return (
        <footer className="stats">
            <em>
                {
                    percent === 100 ? 'You got everything! Ready to go ✈️' :
                    `👜 You have ${itemsarraylength} ${itemsarraylength <= 1 ? 'item ' : 'items '} 
                    on your list, and you already packed ${packeditemsarraylength} (${percent}%)
                    `
                }
            </em>
        </footer>
    )
}

export default Stats