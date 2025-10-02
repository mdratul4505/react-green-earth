import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <>
        <Navbar />

            <main className='min-h-[calc(100vh-285px)]'>
            <p>welcome to my chanel</p>
                <Outlet />
                    
                
            </main>

            <Footer />
        </>
    );
};

export default RootLayout;