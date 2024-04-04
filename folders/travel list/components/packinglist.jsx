import { useState } from "react";

function PackingList(props) {
    const [sortBy, setSortBy] = useState("");
    let sortedItems = [...props.items]; // Default to a shallow copy of items

    switch (sortBy) {
        case "item":
            sortedItems.sort((a, b) => a.item.localeCompare(b.item));
            break;
        case "packed":
            sortedItems.sort((a, b) => a.packed - b.packed);
            break;
        // No need for "input" case as the default sortedItems is already a copy of props.items
        default:
            break;
    }

    function handleClear() {
        props.clearItems()
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} item={item} delete={props.delete} oncheck={props.oncheck} />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="">SORT PACKING BAG</option>
                    <option value="input">SORT BY INPUT ORDER</option>
                    <option value="packed">SORT BY PACKED STATUS</option>
                    <option value="item">SORT BY ITEM NAME</option>
                </select>
                <button type="reset" aria-label="Clear List" onClick={handleClear}>CLEAR LIST</button>
            </div>
        </div>
    );
}

function Item(props) {
    return (
        <li>
            <input
                type="checkbox"
                checked={props.item.packed}
                onChange={() => props.oncheck(props.item.id)}
                aria-label={`Mark ${props.item.item} as packed`}
            />
            <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
                {props.item.quantity} {props.item.item}
            </span>
            <button onClick={() => props.delete(props.item.id)} aria-label={`Delete ${props.item.item}`}>❌</button>
        </li>
    );
}

export default PackingList;