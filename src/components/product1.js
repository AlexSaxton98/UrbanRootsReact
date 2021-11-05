import Modal from 'react-modal';
import React, { useState } from 'react';
import "./product.css";
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Product = ({ name, price, category, imageUrl, description }) =>{
  const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleHideModal = () => {
        setShowModal(false);
    };


const handleClick = async () => {
  axios.post(`${BASE_URL}/basket/`, {
    productName: name,
    price: price,
    category: category,
    imageUrl: imageUrl
  }).then((response) => {
    console.log(response)
  })
}



 

  
  return (
    <div>
      {/* <button >Product</button> */}
      {imageUrl ? 
<>
      <img className="prodImgMain" src={imageUrl} onClick={handleShowModal} alt="plant"/>
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
                          
                          <img className="prodImg" src={imageUrl} alt="plant"/>
                          <div className="prodInfo">
                            <p>{name}</p>
                            <p>{description}</p>
                            <p>£{price}</p>
                            <button onClick={() => handleClick()}>Add To Basket</button>
                            </div>
                          <div className="xDiv">
                              <button onClick={handleHideModal} className="x">×</button>
                          </div>
                       </div>
                </Modal>
                </>
          : ""  }
    </div>
  )

}

export default Product


