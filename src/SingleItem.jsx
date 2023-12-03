

function SingleItem({item,removeItem, editItem}){

    return(
        <div className="single-item">
        <input onChange={() => editItem(item.id)} type="checkbox" checked={item.checked}></input>
        <p style={{textDecoration: item.completed ? "line-through": ""}}>{item.name}</p>
        <button className="btn remove-btn" type="button" onClick={() => removeItem(item.id)}>Delete</button>
        </div>
    )
};

export default SingleItem;