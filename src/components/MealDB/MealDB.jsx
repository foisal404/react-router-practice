import React from 'react';

const MealDB = () => {
    return (
        <div className='flex justify-center  items-center h-screen'>
            <div className='text-center'>
                <h1>this is About MealDB page </h1>
                <p>we use Api from {`https://www.themealdb.com/`}</p>
                <p><small>copyright Reserved by foisal</small></p>
            </div>
        </div>
    );
};

export default MealDB;