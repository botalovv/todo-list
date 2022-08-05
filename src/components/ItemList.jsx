import React from 'react';
import Item from "./Item";

const ItemList = ({items, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {items.map((post, index) =>
                <Item remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default ItemList;