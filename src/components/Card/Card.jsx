import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({data}) => {
    const {idMeal, strMeal, strDrinkAlternate, strCategory, strArea,strMealThumb}=data;
    return (
        <div className='card  my-5 mx-auto bg-gray-100 rounded-md p-4 w-80 ' >
            <img className='rounded-md ' src={strMealThumb} alt="" height="300px" width="300px"/>
            <h1 className='text-center'>{strMeal}</h1>
            <Link to={`/card/${idMeal}`} className='p-2 bg-slate-500 block text-center m-2 rounded-md' >details link</Link>
            <button className='p-2 bg-slate-500 w-full m-2 rounded-md mx-auto'><Link to={`/card/${idMeal}`}>details button</Link></button>
        </div>
    );
};

export default Card;