import './Homepage.css'
import React, {useState, useEffect} from "react" 
import axios from 'axios'

const Basket = () => {

    const [data, setData] = useState([{}])

    useEffect((data) => {
        handleFetch()
        console.log(data)
    }, [])

    const handleFetch = async () => {
        try {
            let response = await fetch("http://localhost:80/basket")
            let info = await response.json()
            setData(info.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleRemove = async (itemId) => {
        axios.delete("http://localhost:80/basket", {params: { id:itemId} }).then(response => {
            console.log(response)
            window.location.reload();
        })
        
    }

    return(
        <div>
        <p>Hello World</p>
        {data.map((item, index) => (
            <li className="listItems">
              <img id="image-small" src={item.imageUrl} alt="plant"/><br/>
              <div className="itemInfo">
              {item.productName}:
              £{item.price} 
              {item.id}        
              <button className="basketButton" onClick={()=>handleRemove(item.id)}>Remove From Basket</button>
              </div>
            </li>
          ))}
          </div>
    )
    
}


export default Basket