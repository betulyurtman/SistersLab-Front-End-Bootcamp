export default function shoppingItem({ shopping, deleteItem, editItem }) {
    const { id, title } = shopping;
    return (
        <article className="shopping-item">
            <div className="container">
            <p className="title">{title}</p>
            <div>
                <button onClick={() => deleteItem(id)} className="delete-btn">X</button>
                <button onClick={() => editItem(id)} className="edit-btn">Edit</button>
            </div>
            </div>
        </article>
    );
}