import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Add,Multiply} from '../../Utilities/Add';
import { getTotal, removeCart } from '../../Utilities/fakeDB';
import Cosmetic from '../Cosmetic/Cosmetic';
import "./Cosmetics.css"
const Cosmetics = () => {
    const sum =Add(40,50);
    const multiply =Multiply(40,50);
    const [cosmetics,setCosmetics]= useState([]);
    useEffect(()=>{
    fetch("data.json")
    .then(res =>res.json())
    .then(data =>setCosmetics(data))
    },[])
    const deleteCart=()=>{
        removeCart();
    }
    const total = getTotal(cosmetics);
    return (
        <div>
            <h1>Cosmetics</h1>
            <p>{sum}</p>
            <p>{multiply}</p>
          <div id="products">
           <h2>Total Cost: {total}</h2>
            {
                    cosmetics.map(cosmetic=><Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
                }
          </div>
            <button onClick={()=>deleteCart()}>Delete Cart</button>
        </div>
    );
};

export default Cosmetics;