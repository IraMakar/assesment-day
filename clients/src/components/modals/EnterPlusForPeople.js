import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { updateOnePeople } from "../../http/peopleAPI";

const EnterPlusForPeople = ({ show, onHide, onSuccess, peopleId, currentMark }) => {
  const [value, setValue] = useState("");

  const addPlus = () => {
    updateOnePeople({ id: peopleId,  sum_mark: parseInt(value)+parseInt(currentMark) }).then(() => {
      onSuccess();
      setValue("");
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Я віддаю свій царський плюсик тобі
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value} //
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Плюсик один або не один писати сюдиииии...."}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Та ні, не тобі
        </Button>
        <Button variant="outline-success" onClick={addPlus}>
          Приймай
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EnterPlusForPeople;
