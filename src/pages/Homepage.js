import "./Homepage.css";
import { useState, useEffect } from "react";
import Featured from "../components/Featured";
import Product from "../components/product1";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        axios.get(`${BASE_URL}/product`).then(response => {
            console.log(response.data)
            setProducts(response.data.data)
        }) 

        
        // const info = await response.json();
        // console.log(info.data.products);
        // setProducts(info.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  return (
    <div className="home">
      <div className="content">
        <Featured />
        {products.map(product => <Product key={product.id} name={product.name} price={product.price} category={product.category} imageUrl={product.imageUrl} description = {product.description} />)}
      </div>
    </div>
  );
};

export default Homepage;
