import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import "./product.css";
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Product = ({id}) =>{
  const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleHideModal = () => {
        setShowModal(false);
    };

  const [data, setData] = useState([{}])

    useEffect(() => {
      const handleFetch = async () => {
    try {
        console.log(BASE_URL)
        let response = await fetch(`${BASE_URL}/product`)
        let info = await response.json()
        console.log(info.data)
        setData(info.data[id])
    } catch (error) {
        console.log(error)
    }
  }
            handleFetch()
        }, [id])


const handleClick = async () => {
  axios.post(`${BASE_URL}/basket/`, {
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
      {data.imageUrl ? 
<>
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
                </>
          : ""  }
    </div>
  )

}

export default Product


