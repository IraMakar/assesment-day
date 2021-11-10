import React from "react"; 
import {  Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const DeletePeople = ({show, onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter"> 
          Ти реально хочеш видалити цього чувачка?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Хочу знищити</Button>
        <Button variant="outline-success" onClick={onHide}>Ммм... а перехотілось</Button>
      </Modal.Footer>
    </Modal>
    );
}; 

export default DeletePeople;