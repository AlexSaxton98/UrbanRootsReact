import "./App.css";

import "./pages/Homepage.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./components/product1";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  //HOMEPAGE

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        axios.get(`${BASE_URL}/product`).then((response) => {
          console.log(response.data);
          setProducts(response.data.data);
        });

        // const info = await response.json();
        // console.log(info.data.products);
        // setProducts(info.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);


  useEffect(() => {
    const data = localStorage.getItem("my-basket")
    if (data) {
    setBasket(JSON.parse(data))
    }
}, [])

useEffect(() => {
    localStorage.setItem("my-basket", JSON.stringify(basket))
})

useEffect(() => {
  const data = localStorage.getItem("my-total")
  if (data) {
  setTotal(JSON.parse(data))
  }
}, [])

useEffect(() => {
  localStorage.setItem("my-total", JSON.stringify(total))
})

  //HOMEPAGE

  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = (data) => {
    
    let current = [...basket];
    const found = current.find((element) => element.id === data.id)

    if (found) {
      found.quantity += 1;
    } else {
      data.quantity = 1;
      current.push(data);
    }
    setBasket(current);
    setTotal(current.reduce((previous, current) => previous + current.price*current.quantity, 0));
  };

  const removeCart = (item, index) => {
      let current = [...basket];
      const found = current.find((element) => element.id === item.id)
      if (found.quantity === 0) {
          current.splice(index, 1)
          setBasket(current)
          setTotal(current.reduce((previous, current) => previous + current.price*current.quantity, 0));
      } else {
        found.quantity -= 1
      }
      setBasket(current)
      setTotal(current.reduce((previous, current) => previous + current.price*current.quantity, 0));

  }

  const addCart = (item) => {
    let current = [...basket];
    const found = current.find((element) => element.id === item.id)
    if(found) {
      found.quantity += 1
    }
    setBasket(current)
    setTotal(current.reduce((previous, current) => previous + current.price*current.quantity, 0));
  }

  const handleRemove = (index) => {
    const current = [...basket]
    current.splice(index, 1)
    setBasket(current)
    setTotal(current.reduce((previous, current) => previous + current.price*current.quantity, 0));
  };

  return (
    <Router className="App">
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <div className="home">
            <div className="content">
              {/* <Featured /> */}
              {products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.productName}
                  price={product.price}
                  category={product.category}
                  imageUrl={product.imageUrl}
                  description={product.description}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </Route>

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        {/* {
    "1" : {id, name, imageUrl... , quantity : 3}, 
    "4" : {id, name, imageUrl... ,  quantity: 5}
    } */}

        <Route exact path="/basket">
          <div>
            {/* <p>Hello World</p> */}

            <h3>Total - £{total}</h3>
            <ol>
              {basket.map((item, index) => (
                <li className="listItems" key={item.id}>
                  <img id="image-small" src={item.imageUrl} alt="plant" />
                  <br />
                  <div className="itemInfo">
                    {item.name}: £{item.price} -  <button onClick={() => removeCart(item, index)}>-</button> #{item.quantity} <button onClick={() => addCart(item)}>+</button>
                    <button
                      className="basketButton"
                      onClick={() => handleRemove(index)}
                    >
                      Remove From Basket
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
