import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MenuCategory } from './MenuCategory';
import { getCategories, postCategory} from "./MenuApi";
import { useState, useEffect } from 'react';


function NewCategoryForm() {
  const [allCategories, setAllCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    //get information, then update state
    async function stateUpdate() {
      try {
        const apiData = await getCategories();
        setAllCategories(apiData);
        console.log(allCategories);
      } catch (error) {
        console.log(error);
      }
      
    }
    stateUpdate();
  }, []);

  return (
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
      onClick={postCategory(newCategory)}
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
  );
}

export default NewCategoryForm;