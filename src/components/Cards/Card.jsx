import React from 'react';

const Card = ({tool}) => {
    const {icon, title, description} = tool;
    return (
       
             <div className='bg-gray-50 shadow-md p-5 rounded space-y-2'>
                    <p className='flex justify-center'>{icon} </p>
                    <h1 className='text-lg font-semibold'>{title} </h1>
                    <p className='text-[#9b9d9f] text-sm'>{description} </p>

            </div>
    
    );
};

export default Card;