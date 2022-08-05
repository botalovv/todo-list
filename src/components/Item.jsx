import React from 'react';
import MyButton from "./UI/buttons/MyButton";

const Item = (props) => {

    return (
        <div className="item">
            <div className="item__content">
                <button>Готово</button>
                <strong>{props.number}. {props.item.title}</strong>
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