import React, {useState} from 'react';
import MyButton from "./UI/buttons/MyButton";

const Item = (props) => {

    const [isActive, setIsActive] = useState(false)


    const performedMark = () => {
        setIsActive(current => !current);
    }
    return (
        <div className="item" style={{
            backgroundColor: isActive ? 'gray' : '',
            textDecoration: isActive ? 'line-through' : '',
        }}>
            <div className="item__content">
                <MyButton onClick={performedMark}>
                    Выполнено
                </MyButton>
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