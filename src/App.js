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

  async function updateCategory(updatedCategory) {
    try {
      fetch(`${menuApi}/${updatedCategory.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCategory),
      });

      updatedCategory.menuItems.push(newItem);

      getCategories();
    } catch (error) {
      console.log(error);
    }
  }

  async function postCategory(e, categoryName) {
    e.preventDefault(); //used for things wrapped in a form, keeps it from refreshing the page before using contents
    try {
      let response = await fetch(menuApi, {
        //options
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName }),
      });
      let test = await response.json();
      return test;
    } catch (error) {
      console.error(error);
    }

    let returnData = await getCategories();
    return returnData;
  }

  async function deleteCategory(id) {
    try {
      const response = await fetch(menuApi + `/${id}`, {
        method: "DELETE",
      });
      setAllCategories(allCategories.filter((p) => p.id !== id));
      await getCategories();
      // allCategories.filter(id);
    } catch (error) {
      console.error(error);
    }
  }
  //need to fix this:
  async function deleteMenuItem(menuItemId) {
    const updatedCategory = {
      ...category,
      menuItems: category.menuItems.filter((x) => x.id !== menuItemId),
    };

    try {
      await updateCategory(updatedCategory);
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
                        onChange={(e) => setNewCategory(e.target.value)}
                      />
                      {/* use an onchange to get the value input then an on click for the button */}
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={(e) => postCategory(e, newCategory)}

                      // use an onclick to use POST method
                      //prevent default
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
                        onDelete={deleteCategory}
                        addNewItem={updateCategory}
                        itemDelete={deleteMenuItem}
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
