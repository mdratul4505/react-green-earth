import React from 'react';
import { Link } from 'react-router';

const PlantCart = ({ tree }) => {
    const {image, name ,description , price , id} = tree
    return (
        <>
            <div className="card bg-base-100 shadow-sm border-2 border-green-600 w-full">
                <figure>
                    <img className='w-full h-60 '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>price : {price}</p>
                    <div className="card-actions justify-end">
                        <Link to = {`/plant-details/${id}`}  className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlantCart;