import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayProducts({ products, handleAdd, handleSubtract }) {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow(false);

  const handleShow = (product) => {
    setShow(true);
    setShowImage(product);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-row" key={product.id}>
          <h2 className="product-name">{product.desc}</h2>

          <div className="product-detail">
            <img
              src={product.image}
              alt={product.desc}
              className="product-image"
              onClick={() => handleShow(product)}
            />

            <div className="button-stack">
              <Button
                variant="secondary"
                size="sm"
                className="qty-btn"
                onClick={() => handleAdd(product.id)}
              >
                <FontAwesomeIcon icon={faPlusCircle} />
              </Button>

              <Button
                variant="secondary"
                size="sm"
                className="qty-btn"
                onClick={() => handleSubtract(product.id)}
              >
                <FontAwesomeIcon icon={faMinusCircle} />
              </Button>
            </div>

            <span className="qty-text">Quantity</span>
            <div className="qty-box">{product.value}</div>
          </div>
        </div>
      ))}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{showImage.desc}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body-custom">
          <img
            src={showImage.image}
            alt={showImage.desc}
            className="modal-image"
          />
          <p className="rating-text">
            <span className="rating-label">Ratings:</span> {showImage.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;