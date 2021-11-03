import Modal from 'react-modal';
import React, { useState } from 'react';
import "./product.css";

const Product = () =>{
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
      setShowModal(true);
  };

  const handleHideModal = () => {
      setShowModal(false);
  };
  return (
    <div>
      <button onClick={handleShowModal}>Product</button>
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
                          <div className="xDiv">
                              <button onClick={handleHideModal} className="x">×</button>
                          </div>
                          <div>
                              
                              
                          </div>
                       </div>
                </Modal>
    </div>
  )

}

export default Product


