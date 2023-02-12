import { Button, Card } from "react-bootstrap";
const App = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="d-inline">Card Title</Card.Title>
          <Button variant="outline-dark">
            <i className="fa-solid fa-trash"></i>
          </Button>
        </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default App;
