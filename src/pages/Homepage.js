import './Homepage.css'
import { useState } from 'react';
import Featured from '../components/Featured'





const Homepage = () => {
    
const [data, setData] = useState()

const handleFetch = async () => {
    console.log("got here 1")
    try {
        console.log("got here 2")
        let response = await fetch("http://localhost:80/product")
        let data = await response.json()
        let info = JSON.stringify(data)
        setData(info)
    } catch (error) {
        console.log(error)
    }
}

let pageInfo = data

    return (
        <div className="home">
            <div className="content">
                <Featured />
                <button onClick={handleFetch}>Hello</button>
                <p>{pageInfo}</p>
            </div>
        </div>
    )
}

export default Homepage
