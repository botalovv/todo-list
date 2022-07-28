import React from 'react';
import {useState} from "react";

const Counter = () => {
    let [likes, setLikes] = useState(0);

    function increment() {
        setLikes(likes + 1);
    }

    function decrement() {
        setLikes(likes - 1)
    }
    return (
        <div>
            <button onClick={increment}>Увеличить значение</button>
            <button onClick={decrement}>Уменьшить значение</button>
        </div>
    );
};

export default Counter;