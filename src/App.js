import React, {useState} from "react";
import "./styles/App.css";
import Item from "./components/Item";
import ItemList from "./components/ItemList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/input/MyInput";
import ItemForm from "./components/ItemForm";
function App() {

    const [item, setItem] = useState([
        {id: 1, title: "Помыть посуду"},
        {id: 2, title: "Приготовить еду"},
        {id: 3, title: "Сходить в магазин"},
    ])


    // const addNewItem = () => {
    //     console.log(title)
    //     console.log('1212')
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const newItem = {
    //         id: Date.now(),
    //         title,
    //     }
    //     setItem([...item, newItem]);
    //     setTitle('');
    // }

    const createItem = (newItem) => {
    setItem([...item, newItem])
    }

   let performedMark = () => {

    }

  return (
          <div className="App">
              <div className="todos">
                  <ItemForm create={createItem}/>
              </div>
              <ItemList item={item} title="todos"/>
          </div>
  );
}

export default App;
