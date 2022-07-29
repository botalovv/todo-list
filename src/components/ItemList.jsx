import React from 'react';
import Item from "./Item";

const ItemList = ({item, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {item.map((post, index) =>
                <Item number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default ItemList;