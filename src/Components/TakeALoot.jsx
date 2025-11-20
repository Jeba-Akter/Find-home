import React from 'react';

const TakeALoot = () => {
    return (
       <div className=' my-20 bg-amber-200 grid lg:grid-cols-2 gap-5 sm:text-center justify-between items-center w-11/12 py-10 px-5 mx-auto' >
         <div>
            <h1 className='text-4xl font-bold'>take a loot at our numbers</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, sunt?</h2>
        </div>
        <div className=' sm:text-center grid lg:grid-cols-3 gap-10' >
            <div className='  gap-2' >
            <h1 className='text-xl font-bold' >99%</h1>
            <h2 className='text-sm font-normal' >Lorem, ipsum dolor </h2>
        </div>
        {/* 2nd  */}
        <div className='  gap-2' >
            <h1 className='text-xl font-bold' >50M+</h1>
            <h2 className='text-sm font-normal' >Lorem, ipsum </h2>
        </div>
        {/* 3rd  */}
        <div className='  gap-2' >
            <h1 className='text-xl font-bold' >26,000</h1>
            <h2 className='text-sm font-normal' >Lorem, ipsum dolor sit</h2>
        </div>
        </div>
       </div>
    );
};

export default TakeALoot;