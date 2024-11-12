import React from 'react';
import { NavLink } from 'react-router-dom';

const NoPage = () => {
    return (
        <div className='bg-black w-full h-screen flex flex-col items-center '>
            <img 
                className='h-[26rem] w-96 rounded-xl'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUKjeSjFOUfbkY8X_L_NZz9ZW_qykLBdWgJxgwa1_LP0Ka9LpQ8AVIQWYANnOZMicpHc&usqp=CAU"
                alt="404 Not Found"
            />
            <NavLink to={'/'} className="border border-[#7564f5] px-4 py-2 rounded-lg text-white mt-6">Go To Home Page</NavLink>
        </div>
    );
};

export default NoPage;
