import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/buttons/MyButton";
import {useState} from "react";
import item from "./Item";

const ItemForm = ({create}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [timeToComplete, setTimeToComplete] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            ...item, id: Date.now(), title: title, description: description, timeToComplete: timeToComplete,
        }
        create(newItem)
        setTitle('');
        setDescription('');
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
                <MyInput
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    placeholder="Описание задачи"
                />
            </label>
            <p>Дата выполнения:</p>
            <MyInput
                onChange={e => setTimeToComplete(e.target.value)}
                type="date"
                placeholder="Дата завершения задачи"
            />
            <MyButton>
                Сохранить
            </MyButton>
        </form>
    );
};

export default ItemForm;