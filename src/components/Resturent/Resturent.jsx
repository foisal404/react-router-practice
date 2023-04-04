import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Resturent = () => {
    const data =useLoaderData();
    // console.log(data.meals);
    return (
        <div>
            <h1 className='text-center'>Available Foods in resturent</h1>
            <div className='grid md:grid-cols-3 grid-cols-1'>
            {
                data.meals.map(data=><Card key={data.idMeal} data={data}></Card>)
            }
            </div>
            
        </div>
    );
};

export default Resturent;