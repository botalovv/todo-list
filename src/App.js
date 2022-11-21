import React, {useState} from "react";
import "./styles/App.css";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
function App() {

    const [items, setItems] = useState([
        {id: 1, title: "Помыть посуду", description: "Кастрюли, сковородки и стаканы", timeToComplete: "2022-10-10", files:'asd.txt'},
        {id: 2, title: "Приготовить еду", description: "Паста, суп и чизкейк", timeToComplete: "2022-11-19", files:''},
        {id: 3, title: "Сходить в магазин", description: "Купить хлеб, масло, молоко", timeToComplete: "2022-12-10", files:''},
    ])
        // Фильтрация массива с помощью map по условию
    const createItem = (newItem) => {
    setItems([...items, newItem])
    }

        //Механизм удаления задач
    const removeTask = (item) => {
        setItems(items.filter(itm => itm.id !== item.id))
    }

  return (
          <div className="App">
              <div className="todos">
                  <ItemForm create={createItem}/>
              </div>
              {items.length !== 0
              ? <ItemList remove={removeTask} items={items} title="todos"/>
              : <h3 style={{textAlign: "center"}}>Задач нет</h3>
              }
          </div>
  );
}

export default App;
