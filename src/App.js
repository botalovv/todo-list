import React, {useState} from "react";
import "./styles/App.css";
import Item from "./components/Item";
import ItemList from "./components/ItemList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/input/MyInput";
import ItemForm from "./components/ItemForm";
function App() {

    const [items, setItems] = useState([
        {id: 1, title: "Помыть посуду"},
        {id: 2, title: "Приготовить еду"},
        {id: 3, title: "Сходить в магазин"},
    ])

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
