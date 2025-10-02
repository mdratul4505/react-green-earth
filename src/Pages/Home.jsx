import React, { useEffect, useState } from 'react';
import PlantCart from '../Components/PlantCart';


const Home = () => {
    const [trees, setTrees] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/plants').then(res => res.json()).then(data => setTrees(data.plants))
    },
        [])
    return (
        <>
            <h2>hello duniya</h2>

            {
                trees.map(tree => <PlantCart 
                key={tree.id}
                tree={tree} >

                </PlantCart>)
            }

        </>
    );
};

export default Home;