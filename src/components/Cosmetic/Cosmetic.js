import React from 'react';
import { addToDB, removeFormDB } from '../../Utilities/fakeDB';
import "./Cosmetic.css"

const Cosmetic = (props) => {
    const{name,price,id}=props.cosmetic;
    const addToCart =(id)=>{
        addToDB(id);
    }
    const removeFromCart=(id)=>{
        removeFormDB(id)
    }
    return (
        <div id="product">
            <h3>Buy this:{name}</h3>
            <p>Price: {price}</p>
            <button onClick={()=>addToCart(id)}> Add to Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;