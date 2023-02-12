import { Modal, Button, Form } from "react-bootstrap";

const priorities = [
  { id: 1, value: "Primary" },
  { id: 2, value: "Secondary" },
  { id: 3, value: "Success" },
  { id: 4, value: "Danger" },
  { id: 5, value: "Warning" },
  { id: 6, value: "Info" },
  { id: 7, value: "Light" },
  { id: 8, value: "Dark" },
];

const ModalCard = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add new task</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter task title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter task description" />
        </Form.Group>
        <Form.Select aria-label="Default select priority">
          <option>Open this select menu</option>
          {priorities.map((i) => (
            <option value={i.id}>{i.value}</option>
          ))}
        </Form.Select>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
);
export default ModalCard;
