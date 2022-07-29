import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";
import item from "./Item";

const ItemForm = ({create}) => {

    const [title, setTitle] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            ...item, id: Date.now(), title: title,
        }
        create(newItem)
        setTitle('');
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Новая задача
                <MyInput
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Что запланировали?"
                />
            </label>
            <MyButton>
                Сохранить
            </MyButton>
        </form>
    );
};

export default ItemForm;