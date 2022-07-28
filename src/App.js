import React, {useState} from "react";
import "./styles/App.css";
import Item from "./components/Item";
import ItemList from "./components/ItemList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {

    const [item, setItem] = useState([
        {id: 1, title: "Помыть посуду"},
        {id: 2, title: "Приготовить еду"},
        {id: 3, title: "Сходить в магазин"},
    ])

    const [title, setTitle] = useState('')

    const addNewItem = (e) => {
        e.preventDefault()
        console.log(title)
    }

    // setItem.

  return (
          <div className="App">
              <div className="todos">
                  <form>
                      <label>
                          Новая задача
                          <MyInput
                              onChange={e => setTitle(e.target.value)}
                              value={title}
                              type="text"
                              placeholder="Что запланировали?"
                          />
                      </label>
                      <MyButton onClick={addNewItem}>
                          Сохранить
                      </MyButton>
                  </form>
              </div>
              <ItemList item={item} title="todos"/>
          </div>
  );
}

export default App;
