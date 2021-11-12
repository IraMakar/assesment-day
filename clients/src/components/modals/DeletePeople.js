//import React, { useState } from "react"; 
import {  Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { deleteOnePeople } from "../../http/peopleAPI";
import React from "react"; 
import { useState } from "react";
import { useContext } from "react";//
import { Context } from "../..";
import { useParams } from "react-router"; //
import { useEffect } from "react";



const DeletePeople = ({ show, onHide, onSuccess, peopleId }) => {
  const [value, setValue] = useState("");

  // const deleteOne = () => {
  //   deleteOnePeople(id).then((id) => {
  //     onSuccess();
  //     //setValue("");
  //     onHide();
  //   });
  // };

  const deleteOne = () => {
    deleteOnePeople().then(() => {
      onSuccess();
      setValue("");
      onHide();
    });
  };
// // const DeletePeople = ({show, onHide, onSuccess, peopleId}) => {
//   const DeletePeople = ({show, onHide, onSuccess}) => {

//    const [people, setPeople] = useState(id); //
//   //const [people, setPeople] = useState(); //

//   const { id } = useParams();
//   //useEffect(() => {
//     //
//     const deleteOne = () => {

//     deleteOnePeople(id).then((data) => setPeople(data)); //
//   }; //

  //const [comentVisible, setComentVisible] = useState(false);

  //const [value, setValue] = useState("");
  //const [ setValue] = useState("");

  // const EnterPlusForPeople = ({ show, onHide, onSuccess, peopleId, currentMark }) => {
  //   const [value, setValue] = useState("");
  
  //   const addPlus = () => {
  //     updateOnePeople({ id: peopleId,  sum_mark: parseInt(value)+parseInt(currentMark) }).then(() => {
  //       onSuccess();
  //       setValue("");{people.id}
  //       onHide();
  //     });
  //   };
  //const [people, setPeople] = useState({ info: [] }); //
  //const { id } = useParams();
  //
  // const EnterPlusForPeople = ({ show, onHide, onSuccess, peopleId, currentMark }) => {
    //const [value, setValue] = useState("");
  //--------------------------------
    // const deleteOne = (id) => {
    //   deleteOnePeople({id}).then((people) => {
    //     onSuccess();
    //    // setValue("");
    //     //setPeople("");
    //     onHide();
    //   });
    // };
  //--------------------------------



  ////const deleteOne = (id) => {
    //deleteOnePeople({id}).then(() => {
      // deleteOnePeople(id).then((data) => setPeople(data)); //
      ////deleteOnePeople(id).then((data) => { //


      //     onSuccess();
      //     //setValue("");
      //     onHide();
      //   });
      // };
      //const [comentVisible, setComentVisible] = useState(false);


      // const [peopleVisible, setPeopleVisible] = useState(false)
    
      // const {peopleId} = useContext(Context)
      // //const [name, setName] = useState(''); //
      
  
      // const deleteOne = () => {
         
      //   deleteOnePeople(peopleId).then(data => setPeopleVisible(peopleId))
      //     //fetchOnePeople(id).then((data) => setPeople(data));
      // }


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
        {/* <Button variant="outline-danger" onClick={() => {deleteOne(people)}}>Хочу знищити</Button> */}
        <Button variant="outline-success" onClick={onHide}>Ммм... а перехотілось</Button>
      </Modal.Footer>
    </Modal>
    );
}; 

export default DeletePeople;