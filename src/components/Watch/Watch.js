import React from 'react';
import { useState } from 'react';
import Display from '../Display/Display';
const Watch = () => {
    const [steps,setSteps]=useState(0)
    const countStep =()=>{
        // const newStep = steps+1;
        setSteps(steps+1);
    }
    return (
        <div  style={{border: "2px solid green",margin: "10px"}}>
            <h1>My Smart Watch</h1>
            <h3>Steps: {steps}</h3>
            <button onClick={countStep}>De dour..........</button>
            <Display name="Badhon" steps={steps}></Display>

        </div>
    );
};

export default Watch;