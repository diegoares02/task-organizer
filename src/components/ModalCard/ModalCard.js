import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const priorities = [
  { id: "Primary", value: "Primary" },
  { id: "Secondary", value: "Secondary" },
  { id: "Success", value: "Success" },
  { id: "Danger", value: "Danger" },
  { id: "Warning", value: "Warning" },
  { id: "Info", value: "Info" },
  { id: "Light", value: "Light" },
];

const ModalCard = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    importance: ''
  })
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [key]: value})
  }
  const onSubmitClose = (e) => {
    e.preventDefault();
    handleClose(formData);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="myform" onSubmit={onSubmitClose}>
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter task title" onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" placeholder="Enter task description" onChange={handleChange} />
          </Form.Group>
          <Form.Select aria-label="Default select priority" name="importance" onChange={handleChange}>
            <option>Open this select menu</option>
            {priorities.map((i) => (
              <option value={i.id}>{i.value}</option>
            ))}
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="myform">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCard;
