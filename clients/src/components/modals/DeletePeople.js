//import React, { useState } from "react"; 
import {  Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { deleteOnePeople } from "../../http/peopleAPI";
import React from "react"; 

const DeletePeople = ({ show, onHide, onSuccess, deletid }) => {

  const deleteOne = () => {
   console.log(deletid) 
    deleteOnePeople(deletid).then(() => {
      window.location.href = `/`;
      onHide(); 
    });
  };

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
        <Button variant="outline-danger" onClick={deleteOne}>Хочу знищити</Button>
        <Button variant="outline-success" onClick={onHide}>Ммм... а перехотілось</Button>
      </Modal.Footer>
    </Modal>
    );
}; 

export default DeletePeople;