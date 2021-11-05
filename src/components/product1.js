import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import "./product.css";
import axios from 'axios'

const Product = () =>{
  const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleHideModal = () => {
        setShowModal(false);
    };

  const [data, setData] = useState([{}])

    useEffect(() => {
        handleFetch()
    }, [])

  const handleFetch = async () => {
    try {
        let response = await fetch("http://localhost:80/product")
        let info = await response.json()
        console.log(info.data)
        setData(info.data[0])
    } catch (error) {
        console.log(error)
    }
  }

const handleClick = async () => {
  axios.post("http://localhost:80/basket/", {
    productName: data.productName,
    price: data.price,
    category: data.category,
    imageUrl: data.imageUrl
  }).then((response) => {
    console.log(response)
  })
}



 

  
  return (
    <div>
      {/* <button >Product</button> */}
      <img className="prodImgMain" src={data.imageUrl} onClick={handleShowModal} alt="plant"/>
       <Modal 
                    isOpen={showModal}
                    ariaHideApp={false}
                    className="Modal"
                    style={{
                        overlay: {
                            backgroundColor: '#0000007b',
                        }
                    }}
                    >
                      <div className="modalContainer">
                          
                          <img className="prodImg" src={data.imageUrl} alt="plant"/>
                          <div className="prodInfo">
                            <p>{data.productName}</p>
                            <p>{data.description}</p>
                            <p>£{data.price}</p>
                            <button onClick={() => handleClick(data)}>Add To Basket</button>
                            </div>
                          <div className="xDiv">
                              <button onClick={handleHideModal} className="x">×</button>
                          </div>
                       </div>
                </Modal>
    </div>
  )

}

export default Product


