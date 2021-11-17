import React from "react"; 
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Reset = ({ show, onHide, onReset }) => {
  //const {people} = useContext(Context)  
  // масивКористувачів.map(item=>{
  //   updateOnePeople({
  //   id: item.id,
  //   sum_mark: 0
  //   })
  //   })
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
        <Button variant="outline-danger" onClick={onReset}>Так</Button>
        <Button variant="outline-success" onClick={onHide}>О ні</Button>
      </Modal.Footer>
    </Modal>
    );
}; 

export default Reset;