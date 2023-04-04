import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';

const DetailsCard = () => {
    //navigate hook to navigate the link
    const nevigate =useNavigate()
    const goBack=()=>{
        //or link
        nevigate(-1)
    }

    const [state,setState]=useState(0);
    // parent declare handler action come from another child
    const handlerCart=()=>{
        setState(state+1);
    }
    const data=useLoaderData();
    console.log(data.meals);
    const {idMeal, strMeal, strDrinkAlternate, strCategory, strArea,strMealThumb}=data.meals[0];
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 '>
            <div className='flex justify-center  items-center h-screen col-span-2 order-2 md:order-1'>
                <div className='border-2 p-5 rounded-md'>
                    <h1 className='text-center'>Details Card</h1>
                    <h1>{strMeal}</h1>
                    <img src={strMealThumb} alt=""  width="400px"/>
                    <div className='mx-auto'>
                        <button className=' px-8 py-1 rounded-md bg-green-300  m-10 ' onClick={handlerCart}>add</button>
                        <button className='px-8 py-1 rounded-3xl bg-rose-300  m-10 ' onClick={goBack}>back</button>
                    </div>
                </div>
            </div>
            {/* pass the state in child  */}
            <Cart state={state} ></Cart>
        </div>
    );
};

export default DetailsCard;