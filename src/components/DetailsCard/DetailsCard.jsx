import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const DetailsCard = () => {
    //navigate hook to navigate the link
    const nevigate =useNavigate()
    const goBack=()=>{
        //or link
        nevigate(-1)
    }
    const data=useLoaderData();
    console.log(data.meals);
    const {idMeal, strMeal, strDrinkAlternate, strCategory, strArea,strMealThumb}=data.meals[0];
    return (
        <div className='flex justify-center  items-center h-screen'>
            <div className='border-2 p-5 rounded-md'>
                <h1 className='text-center'>Details Card</h1>
                <h1>{strMeal}</h1>
                <img src={strMealThumb} alt=""  width="400px"/>
                <button className='px-8 py-1 rounded-md bg-slate-500 w-full m-5 mx-auto' onClick={goBack}>back</button>
            </div>
        </div>
    );
};

export default DetailsCard;