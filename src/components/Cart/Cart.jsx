import React from 'react';

const Cart = ({state}) => {
    return (
        <div className='m-5 order-1 md:order-2'>
            <div className='p-5 bg-slate-300 rounded-md'>
                <h1>this is cart</h1>
                <h1 className='text-green-400'>{state}</h1>
            </div>
        </div>
    );
};

export default Cart;