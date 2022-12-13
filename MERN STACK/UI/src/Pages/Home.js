import React from 'react'
import Ad from "../Components/Ad";
import Slider from "../Components/Slider";
import Inquiry from "../Components/Inquiry";




import Navbar from '../Components/Navbar'
import Category from '../Components/Category';
import Products from '../Components/Products';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>
            <Ad />
            <Navbar />
            <Slider />
            <Category />
            <Products />
            <Inquiry/>
            <Footer/>
        </>
    )
}

export default Home