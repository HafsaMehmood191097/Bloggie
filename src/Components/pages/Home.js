import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MainContent from '../MainContent';
import Footer from '../Footer';
function Home(){
    return(
           
        <>
        <MainContent />
        <Cards/>
        <Footer/>
        </>
    );
}

export default Home;