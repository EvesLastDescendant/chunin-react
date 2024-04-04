function Form(props) {
    return (
        <form className="add-form" name="add-form" onSubmit={props.submit}>
            <h3>What do you need for your 😻 trip ?</h3>
            <select name="num-option" value={props.option} onChange={props.optionchange}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => 
                    <option value={num} key={num}>{num}</option>
                )}
            </select>
            <input 
                type="text" 
                placeholder="item..."
                name="item"
                value={props.input}
                onChange={props.onchange}
            />
            <button type="submit">ADD</button>
        </form>
    )
}

export default Form