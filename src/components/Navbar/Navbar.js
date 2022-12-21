import React from 'react';
import Link from '../Link/Link';
import './Navbar.css'
import { Bars3Icon,XCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
const Navbar = () => {
    const [open,setOpen]=useState(0);
    const routes=[
        {id:1,name:'Home',path:'/home'},
        {id:2,name:'About',path:'/about'},
        {id:3,name:'Contact',path:'/contact'},
        {id:4,name:'Service',path:'/service'},
    ]
    return (
        <nav className='bg-indigo-200'>
            <div className='w-6 h-6 md:hidden' onClick={()=>setOpen(!open)}>
              {
                open? <XCircleIcon></XCircleIcon> :<Bars3Icon></Bars3Icon>
              }
            </div>
        <ul className={`md:flex justify-center bg-indigo-200 w-full absolute duration-500 ease-in ${open? 'top-[-120px]' : 'top-6' }`}>
                {
                    routes.map(route=><Link route={route} key={route.id}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;