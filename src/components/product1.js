import Modal from "react-modal";
import React, { useState } from "react";
import "./product.css";
import { useHistory } from "react-router-dom";



const Product = ({
  id,
  name,
  price,
  category,
  imageUrl,
  description,
  handleClick,
  user
}) => {
  const history = useHistory()
  const isLoggedIn = user.token

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    history.push("/login")
  }

  return (
    <div className="product_container">
      {/* <button >Product</button> */}
      {imageUrl ? (
        <>
          <img
            className="prodImgMain"
            src={imageUrl}
            onClick={handleShowModal}
            alt="plant"
          />
          <div className="nameprice">
            <p className="overflowname">{name}</p>
            <p>£{price}</p>
          </div>
          <Modal
            isOpen={showModal}
            ariaHideApp={false}
            className="Modal"
            style={{
              overlay: {
                backgroundColor: "#0000007b",
              },
            }}
          >
            <div className="modalContainer">
              <img className="prodImg" src={imageUrl} alt="plant" />
              <div className="prodInfo">
                <p>{name}</p>
                <p>{description}</p>
                <p>{category}</p>
                <p>£{price}</p>
                <button
                  className="add_button"     
                  onClick={isLoggedIn ?
                    () =>

                    handleClick({
                      id,
                      name,
                      price,
                      category,
                      imageUrl,
                      description,
                    })
                    :
                    () => handleLogin()
                  }
                   
                
                >
                  Add To Basket
                </button>
              </div>
              <div className="xDiv">
                <button onClick={handleHideModal} className="x">
                  ×
                </button>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
