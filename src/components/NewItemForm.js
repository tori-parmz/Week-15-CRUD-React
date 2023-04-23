import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Form from 'react-bootstrap/Form'

function NewItemForm(props) {
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  


const onSubmit = (e) => {
    e.preventDefault();
    if (itemName && itemPrice) {
        props.addNewItem({itemName, itemPrice});
        setItemName('');
        setItemPrice('');
        handleClose();
    } else {
        console.log('invalid input');
    }
}

  return (
    <>
      <Button variant="success" onClick={handleShow}>
      <i class="bi bi-plus-square"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an item to the {} category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Item Name</Form.Label>
        <Form.Control type="text" placeholder="Item Name" />
        <Form.Label>Item Price</Form.Label>
        <Form.Control
        type="text"
        placeholder="0.00"
        value={itemPrice}
        />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default NewItemForm;