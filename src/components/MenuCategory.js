import { useState } from "react";
import { Modal, Form, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export function MenuCategory(props) {
  let { menuCategory, onDelete, addItem, itemDelete } = props;
  const { categoryName, categoryId, menuItems } = menuCategory;
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(undefined);
  const [counter, setCounter] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (itemName && itemPrice) {
      console.log(itemName, itemPrice);

      const newItem = {
        itemId: counter,
        itemName: itemName,
        itemPrice: itemPrice,
      };
      console.log(newItem);
      menuItems.push(newItem);
      addItem(categoryId, menuCategory);
      setItemName("");
      setItemPrice("");
      handleClose();
      setCounter(counter + 1);
    } else {
      console.log("invalid input");
    }
  };
  //need props for item add and item delete
  //for menuItems array: menuCat.menuItems
  //needs PUT method to update menuItems array
  return (
    <div id={`menu-category-${categoryId}`}>
      <h3>
        {categoryName}
        <span>
          <Button
            className="m-2"
            variant="danger"
            onClick={() => onDelete(categoryId)}
          >
            <i className="bi bi-trash3"></i>
          </Button>
        </span>
      </h3>

      <Button variant="success" onClick={handleShow}>
        <i className="bi bi-plus-square"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an item to the {categoryName} category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item Name"
              onChange={(e) => setItemName(e.target.value)}
            />
            <Form.Label>Item Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="0.00"
              onChange={(e) => setItemPrice(e.target.value)}
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

      <ListGroup variant="flush">
        {menuItems.map((menuItem, index) => (
          <ListGroup.Item {...menuItem} key={index}>
            {" "}
            {menuItem.itemName}.......................{"$" + menuItem.itemPrice}{" "}
            <span>
              <Button
                variant="danger"
                onClick={() =>
                  itemDelete(categoryId, menuItem.itemId, menuCategory)
                }
              >
                <i className="bi bi-trash3"></i>
              </Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
