import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <button  className={`bg-green-300 p-2 px-5 rounded-md  my-52 mx-auto ${navigation.state === "loading" ? "" : "hidden"}`} >
                    {/* <svg className={`animate-spin text-white h-5 w-5 mr-3`} viewBox="0 0 24 24">
                    </svg> */}
                    Processing...
                </button>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;