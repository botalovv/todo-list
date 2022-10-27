import React, {useState} from "react";
import "./styles/App.css";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
function App() {

    const [items, setItems] = useState([
        {id: 1, title: "Помыть посуду"},
        {id: 2, title: "Приготовить еду"},
        {id: 3, title: "Сходить в магазин"},
    ])
        // Фильтрация массива с помощью map по условия (проверить)
    const createItem = (newItem) => {
    setItems([...items, newItem])
    }


    const removeTask = (item) => {
        setItems(items.filter(itm => itm.id !== item.id))
    }

  return (
          <div className="App">
              <div className="todos">
                  <ItemForm create={createItem}/>
              </div>
              <ItemList remove={removeTask} items={items} title="todos"/>
          </div>
  );
}

export default App;
