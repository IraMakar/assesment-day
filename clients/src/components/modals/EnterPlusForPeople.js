import React, { useState } from "react";
import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import { updateOnePeople } from "../../http/peopleAPI";

const EnterPlusForPeople = ({ show, onHide, onSuccess, peopleId, currentMark }) => {
  const [value, setValue] = useState("");
  const [isInvalid, setInvalid] = useState(false);

  const validation = value => value > 0 || value != null;

  const onChange = (event) => {
    const value = +event.target.value;
    if (event.target.value === "") {
      setValue("");
      return;
    }
    if (Number.isNaN(value) || value <= 0) {
      return;
    }
    setValue(value);
    if (!validation(value)) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };

  const reset = () => {
    onSuccess();
    setValue("");
    onHide();
    setInvalid(false);
  };

  const hide = () => {
    onHide();
    reset();
  }

  const addPlus = () => {
    if (!validation(value)) {
      setInvalid(true);
      return;
    }
    updateOnePeople({
      id: peopleId, 
      sum_mark: +value + +(currentMark || 0),
    }).then(() => {
      reset();
    });
  };

  return (
    <Form>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Я віддаю свій царський плюсик тобі
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                value={value} //
                onChange={onChange}
                placeholder={"Плюсик один або не один писати сюдиииии...."}
                isInvalid={isInvalid}
              />
              {isInvalid && (
                <Form.Control.Feedback type="invalid">
                  Введiть правильне значення
                </Form.Control.Feedback>
              )}
            </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={hide}>
            Та ні, не тобі
          </Button>
          <Button type="submit" onClick={addPlus} variant="outline-success">
            Приймай
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default EnterPlusForPeople;
