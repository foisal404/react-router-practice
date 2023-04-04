import React from 'react';
import { Link } from 'react-router-dom';
import AppLink from '../AppLink/AppLink';

const Header = () => {
    return (
        <nav className='flex flex-col md:flex-row  justify-between border-y-2  items-center px-5'>
            <div>
                <h1 className='text-4xl text-slate-400'>mealDB</h1>
            </div>
            <div className='flex p-5  gap-5'>
                <AppLink  className="p-2 mx-2" to="/">Home</AppLink>
                <AppLink className="p-2 mx-2" to="/resrturent">Resturent</AppLink>
            </div>
        </nav>
    );
};

export default Header;