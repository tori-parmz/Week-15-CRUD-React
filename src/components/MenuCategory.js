import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


export function MenuCategory(props){

  const menuApi = "https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories";

    

    let {categoryName, categoryId, onDelete, menuItems} = props;
    const [show, setShow] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(undefined);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //need props for item add and item delete
    //for menuItems array: menuCat.menuItems

    return(
        <div id={`menu-category-${categoryId}`}>
            <h3>{categoryName}
            <span mb-2>
              <Button variant='danger' onClick={() => onDelete(categoryId)}>
                <i className="bi bi-trash3">
                  </i>
                  </Button>
                  </span>
                  </h3>
                  {function NewItemForm(props) {

//needs PUT method to update menuItems array 

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
          <Modal.Title>Add an item to the {categoryName} category</Modal.Title>
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
}}
            
            {/* {menuItems.map((menuItem, index) => {
            return {itemName}...............{"$"+itemPrice} <span><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span>}

                <br></br>
                <br></br>
                 } */}
            

         </div>
    
    )
    
}