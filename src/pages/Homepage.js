import './Homepage.css'
import Featured from '../components/Featured'
import React, { useState, useEffect } from 'react';
import Product from "../components/product"

const Homepage = () => {

    const [data, setData] = useState([{}])

    useEffect(() => {
        handleFetch()
    }, [])

const handleFetch = async () => {
    console.log("got here 1")
    try {
        console.log("got here 2")
        let response = await fetch("http://localhost:80/product")
        let data = await response.json()
        console.log(data)
        setData(data[0])
    } catch (error) {
        console.log(error)
    }
}


    return (
        <div className="home">
            <div className="content">
                <Featured />
                <img src={data.imageUrl} />
                <p>{data}</p>
                <Product />
            </div>
        </div>
    )
}

export default Homepage
