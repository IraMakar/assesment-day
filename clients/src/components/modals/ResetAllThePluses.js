import React from "react"; 
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ResetAllThePluses = ({show, onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter"> 
          Знищити всі плюси !!!
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Так</Button>
        <Button variant="outline-success" onClick={onHide}>О ні</Button>
      </Modal.Footer>
    </Modal>
    );
}; 

export default ResetAllThePluses;