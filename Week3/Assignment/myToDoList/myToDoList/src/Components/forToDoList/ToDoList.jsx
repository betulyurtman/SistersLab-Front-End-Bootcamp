import { useState } from "react";
import "./styles.css";
import ShoppingItem from "./shoppingItem";

const ToDoList = () => {
    const [shopping, setShopping] = useState("");
    const [shoppingList,setShoppingList] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (isEdit) {
            setShoppingList(
                shoppingList.map((item) => {
                    if (item.id === editId) {
                        return { ...item, title: shopping };
                    }
                    return item;
                })
            );
            setIsEdit(false);
            setEditId(null);
            setShopping("");
        } else {
            const newItem = {
            id: new Date().getTime().toString(),
            title: shopping,
            };
            setShoppingList([...shoppingList, newItem]);
            setShopping("");
        }
    };

    const editItem = (id) => {
    setIsEdit(true);
    const editedShopping = shoppingList.find((shopping) => shopping.id === id);

    setShopping(editedShopping.title);
    setEditId(id);
    };

    const deleteItem = (id) => {
        const newList = shoppingList.filter((shopping) => shopping.id !== id);
        setShoppingList(newList);
    };

    return (
        <section className="section-center">
            <form className="shopping-form" onSubmit={handleSubmit}>
            <h3>Ayağını yorganına göre uzat!</h3>
            <div className="form-control">
                <input
                onChange={(e) => setShopping(e.target.value)}
                className="shopping"
                type="text"
                value={shopping}
                placeholder="Ex. Shoes"
                />
                <button type="submit" className="submit-btn">
            {isEdit ? "Edit" : "Submit"}
          </button>
            </div>
        </form>

        {shoppingList.map((shopping) => {
        return (
          <ShoppingItem
            shopping={shopping}
            key={shopping.id}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        );
      })}

      {shoppingList.length !== 0 && (
        <button onClick={() => setShoppingList([])} className="clear-btn">
          Clear All
        </button>
      )}
    </section>
  );
};

export default ToDoList;