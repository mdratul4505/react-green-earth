import React from 'react';
import { RiseLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-285px)]'>
            <RiseLoader></RiseLoader>
        </div>
    );
};

export default LoadingSpinner;