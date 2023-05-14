import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MenuCategory } from "./components/MenuCategory";
import { useState, useEffect } from "react";

function App() {
  //useState hooks: setAllCategories syncs state with API data
  //setNewCategory creates a name for a new category that is posted to API
  const [allCategories, setAllCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const menuApi = "https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories";

  async function getCategories() {
    try {
      const response = await fetch(menuApi);
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function postCategory(e, categoryName) {
    e.preventDefault(); //used for things wrapped in a form, keeps it from refreshing the page before using contents
    try {
      let response = await fetch(menuApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName }),
      });
      const result = await response.json(); // parse the response body as JSON
      setAllCategories([...allCategories, result]); // update the state with the new category
    } catch (error) {
      console.error(error);
    }

    setNewCategory("");
    e.target.reset();
  }

  async function deleteCategory(id) {
    try {
      await fetch(menuApi + `/${id}`, {
        //deletes category by its ID
        method: "DELETE",
      });
      const response = await getCategories();
      setAllCategories(response); //updates allCategories in state to reflect the change
    } catch (error) {
      console.error(error);
    }
  }

  async function updateCategory(id, updatedCategory) {
    //this recieves the categoryId and
    //the menuCategory from MenuCategory component
    try {
      await fetch(`${menuApi}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCategory),
      });
      const response = await getCategories();
      setAllCategories(response); //update state to reflect the change
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteMenuItem(id, menuItemId, menuCategory) {
    console.log("Category ID: ", id, "Item ID: ", menuItemId);
    const updatedCategory = {
      ...menuCategory,
      menuItems: menuCategory.menuItems.filter(
        (menuItem) => menuItem.itemId !== menuItemId
      ),
      //filter to return only items that do not match the deleted item ID
      //only works because menuCategory is holding data for the unique id value
      //and menuItemId is recieving menuItem.itemId from MenuCategory component
    };
    console.log(updatedCategory);
    try {
      await updateCategory(id, updatedCategory); //updatedCategory has all the same data
      //except for the deleted item
      const response = await getCategories();
      setAllCategories(response); //update state
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    //get information, then update state
    async function stateUpdate() {
      try {
        const menuData = await getCategories();
        console.log(menuData);
        setAllCategories(menuData);
        // return allCategories
      } catch (error) {
        console.log(error);
      }
    }
    stateUpdate();
  }, []);

  console.log(allCategories);

  return (
    <div className="App">
      <header className="App-header">
        <div id="demo-menu-content">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card bg="dark">
                <Card.Body>
                  <Card.Title>Create Your Menu Here</Card.Title>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>New Menu Category</Form.Label>
                      <Form.Control
                        type="text"
                        id="menu-category-input"
                        placeholder=""
                        onChange={(e) => setNewCategory(e.target.value)} //onChange gets updates newCategory
                        value={newCategory} //this makes the form entry reset after newCategory is reset in state
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="reset"
                      onClick={(e) => postCategory(e, newCategory)}
                      //onClick sends the event and the newCategory to postCategory
                    >
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card border="dark" id="menu-demo">
                <Card.Img variant="top" src="./header-image.jpg" />
                <Card.Body>
                  <Card.Title>Menu Demo</Card.Title>

                  {allCategories.map((menuCategory, index) => {
                    return (
                      <MenuCategory
                        key={index}
                        menuCategory={menuCategory}
                        onDelete={deleteCategory} //passing functions down as props
                        itemDelete={deleteMenuItem}
                        addItem={updateCategory}
                        {...menuCategory}
                      />
                    );
                  })}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </header>
    </div>
  );
}

export default App;
