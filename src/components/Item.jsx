import React, {useEffect, useState} from 'react';
import MyButton from "./UI/buttons/MyButton";

const Item = (props) => {

    const [isComplete, setIsComplete] = useState(false);
    const [isThereTime, setIsThereTime] = useState(true);

    useEffect(() => {
        if (Date.parse(props.item.timeToComplete) > new Date().getTime()) {
            setIsThereTime(current => !current);
        }
    },[])

    const performedMark = () => {
        setIsComplete(current => !current);
    }

    

    return (
        <div className="item" style={{
            backgroundColor: isThereTime ? 'red' : '',
            textDecoration: isComplete ? 'line-through' : '',
        }}>
            <div className="item__content">
                <MyButton onClick={performedMark}>
                    Выполнено
                </MyButton>
                <strong>{props.number}. {props.item.title}</strong>
            </div>
            <p className="item__description">{props.item.description}</p>
            <p>{props.item.timeToComplete}</p>
            <div className="item__btns">
                <MyButton onClick={() => props.remove(props.item)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default Item;