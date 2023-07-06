import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Review from "./Review";

export default function ModalSection(props) {
  // console.log(props.reviewData);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="the-modal">
      <Button variant="secondary" onClick={handleShow}>
        Click for Reviews
      </Button>

      <Modal
        className="reviews-modal"
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Review
            reviewData={props.reviewData}
            setReviewData={props.setReviewData}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
