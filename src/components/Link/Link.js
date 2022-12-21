import React from 'react';

const Link = (props) => {
    const {id,name,path}=props.route;
    return (
            <li className='mr-5'>
                <a href={path}>{name}</a>
            </li>
    );
};

export default Link;