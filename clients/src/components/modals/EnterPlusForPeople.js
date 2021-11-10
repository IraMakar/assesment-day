import React, { useState } from "react"; 
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { updateOnePeople } from "../../http/peopleAPI";




const EnterPlusForPeople = ({show, onHide}) => {

  const [value, setValue] = useState('')

  const addPlus = () => {//

    updateOnePeople({sum_mark: value}).then(data => {//
      setValue('')//
      onHide()//
    })//
  }//

  // const [people, setPeople] = useState({info: []}) //
  // const {id} = useParams()
  // useEffect(() => { //
  //     fetchOnePeople(id).then(data => setPeople(data))//
  // },[]) //

    return (
        <Modal
        show={show}
        onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter"> 
          Я віддаю свій царський плюсик тобі 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control 
                value={value}//
                onChange={e => setValue(e.target.value)}
                placeholder={"Плюсик один або не один писати сюдиииии...."}
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Та ні, не тобі</Button>
        <Button variant="outline-success" onClick={addPlus}>Приймай</Button>
      </Modal.Footer>
    </Modal>
    );
}; 

export default EnterPlusForPeople;