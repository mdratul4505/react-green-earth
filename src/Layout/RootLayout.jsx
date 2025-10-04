import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet,  useNavigation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';

const RootLayout = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    return (
        <>
        <Navbar />

            {
                navigation?.state === 'loading' ? <LoadingSpinner></LoadingSpinner> :
                <main className='min-h-[calc(100vh-285px)]'>
            <p>welcome to my chanel</p>
                <Outlet />
                    
                
            </main>
            }

            <Footer />
        </>
    );
};

export default RootLayout;