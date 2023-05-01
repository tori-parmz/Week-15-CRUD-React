import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MenuCategory } from './components/MenuCategory';
import { useState, useEffect } from 'react';

function App() {
  //how to structure: where is data needed where is it passing?
  const [allCategories, setAllCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const menuApi = 'https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories';

 async function getCategories () {
    // fetch(menuApi)
    // .then(res => res.json())
    // .then((data) =>setMenuCategories(data))
    //option return data 
    try {
        //handle response
        const response = await fetch(menuApi);
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
    

}

async function getCategory(id) {
    // fetch(menuApi)
    // .then(res => res.json())
    // .then((data) =>setMenuCategories(data))
    //option return data 
    try {
        //handle response
        const response = await fetch(menuApi+`${id}`);
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
    

}

async function deleteCategory(id) {
  try {
      const response = await fetch(menuApi+`${id}`, {
          method: 'DELETE'
  });
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
}

      // id on end of
      // ids are unique and handled by API
      // take a parameter of id, then put the parameter to the end of the URL
      // "menuApi"

async function postCategory(newCategoryData) {
  fetch(menuApi, {
      //options
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCategoryData)
     
  });
}



  useEffect(() => {
    //get information, then update state
    async function stateUpdate() {
      try {
        const menuData = await getCategories();
        console.log(menuData);
        setAllCategories(menuData);
        console.log(allCategories);
      } catch (error) {
        console.log(error);
      }
      
    }
    stateUpdate();
  }, []);
 
  function submitNewCategory() {

  }
  return (
    <div className="App">
      <header className="App-header">
      <div id="demo-menu-content">
    <Row xs={1} md={2}  className="g-4">
        <Col>
          <Card
          bg='dark'
          >
            <Card.Body>
              <Card.Title>Create Your Menu Here</Card.Title>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Menu Category</Form.Label>
        <Form.Control type="text" id="menu-category-input" placeholder="" onChange={(e) => setNewCategory(e.target.value)} />
        {/* use an onchange to get the value input then an on click for the button */}
      </Form.Group>
      <Button
      variant="primary"
      type="submit"
      onClick={console.log(newCategory)}
      // use an onclick to use POST method
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
              <Card.Text>

                {/* {allCategories.map((menuCategory, index) => {
            return <MenuCategory key={index} {...menuCategory} />})} */}

                <MenuCategory id="1" categoryName="Drinks" itemName="Drink 1" itemPrice="4.00" />
               {/* map categories here
               categories map & return <MenuCategory />
               
               */}
              </Card.Text>
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
