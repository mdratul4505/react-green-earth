// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantCart from '../Components/PlantCart';


const Home = () => {
    const {plants}= useLoaderData();
   
    return (
        <>
            <h2>hello duniya</h2>

            <div className='grid grid-cols-3 gap-5 py-10'>
                {
                plants.map(tree => <PlantCart 
                key={tree?.id}
                tree={tree} >

                </PlantCart>)
            }
            </div>

        </>
    );
};

export default Home;