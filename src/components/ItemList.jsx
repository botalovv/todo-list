import React from 'react';
import Item from "./Item";

const ItemList = ({items, title, remove, performed}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {/*Принимаем массив и на его основании отрисовываем каждый элемент*/}
            {items.map((item, index) =>
                <Item remove={remove} number={index + 1} item={item} key={item.id}/>
            )}
        </div>
    );
};

export default ItemList;