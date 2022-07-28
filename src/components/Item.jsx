import React from 'react';
import MyButton from "./UI/button/MyButton";

const Item = (props) => {
    return (
        <div className="item">
            <div className="item__content">
                <strong>{props.post.id}. {props.post.title}</strong>
            </div>
            <div className="item__btns">
                <MyButton>Удалить</MyButton>
            </div>
        </div>
    );
};

export default Item;