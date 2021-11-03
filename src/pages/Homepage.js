import './Homepage.css'
import Featured from '../components/Featured'
import React, { useState, useEffect } from 'react';
import Product1 from "../components/product"
import Product2 from "../components/product1"
import Product3 from "../components/product2"
import Product4 from "../components/product3"
import Product5 from "../components/product4"

const Homepage = () => {

    return (
        <div className="home">
            <div className="content">
                <Featured />
                
                <Product1 />
                <Product2 />
                {/* <Product3 />
                <Product4 />
                <Product5 /> */}
                
            </div>
        </div>
    )
}

export default Homepage
