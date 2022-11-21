import React, {useEffect, useState} from 'react';
import MyButton from "./UI/buttons/MyButton";

const Item = (props) => {

    const [isComplete, setIsComplete] = useState(false);

    const [isThereTime, setIsThereTime] = useState(true);

    //C помощью хука проверяем, есть ли еще время на выполнение задачи, если false, то задача отмечается красным цветом
    useEffect(() => {
        if ((Date.parse(props.item.timeToComplete) + 86400000) > new Date().getTime()) {
            setIsThereTime(current => !current);
        }
    },[])

    //Переключение стилей по нажатию кнопки
    const performedMark = () => {
        setIsComplete(current => !current);
    }



    return (
        <div className="item" style={{
            backgroundColor: isThereTime ? 'red' : '',
            textDecoration: isComplete ? 'line-through' : '',
            borderColor: isThereTime ? 'black' : '',
        }}>
            <div className="item__content">
                <MyButton onClick={performedMark}>
                    Выполнено
                </MyButton>
            </div>
            <div className="item__number">
                <strong>{props.number}.</strong>
            </div>
            <div className="item__title">
                <strong>{props.item.title}</strong>
            </div>
            <div className="item__description_container">
                <p className="item__description">{props.item.description}</p>
            </div>
            <div className="item__date_container">
                <p>Выплонить до: {props.item.timeToComplete}</p>
            </div>
            <div className="item__files">
                <p>Файл: {props.item.files}</p>
            </div>
            <div className="item__btns">
                <MyButton onClick={() => props.remove(props.item)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default Item;