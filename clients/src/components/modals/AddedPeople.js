import React from "react"; 
import {  Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const AddedPeople = ({show, onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter"> 
          Чувачок доданий, юхув..
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="outline-success" onClick={onHide}>Супер</Button>
      </Modal.Footer>
    </Modal>
    );
}; 

export default AddedPeople;