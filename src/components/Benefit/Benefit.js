import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/24/solid'

const Benefit = (props) => {

    return (
        <div className='flex items-center'>
                <p><CheckCircleIcon className='h-6 w-6 text-teal-500'></CheckCircleIcon></p>
                <p className='text-1xl ml-2'>{props.benefit}</p>
        </div>
    );
};

export default Benefit;