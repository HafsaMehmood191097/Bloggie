import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Blogs from './Components/pages/Blog';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp'
function app(){
    return(
        <>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                    <Route path='/about' exact element={<About/>} />
                    <Route path='/blog' exact element={<Blogs/>} />
                    <Route path='/products' exact element={<Products/>} />
                    <Route path='/sign' exact element={<SignUp/>} />
                </Routes>
            </Router>
        </>
            
    );
}
export default app;