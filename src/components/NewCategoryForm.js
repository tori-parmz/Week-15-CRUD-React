import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';


function NewCategoryForm() {
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
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Button variant="primary" type="submit">
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
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>
  );
}

export default NewCategoryForm;