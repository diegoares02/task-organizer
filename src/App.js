import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalCard from "./components/ModalCard/ModalCard";
import TaskCard from "./components/taskCard/TaskCard";

const cards = [
  {
    id: "1",
    title: "Test 1",
    description: "Test 1 description",
    importance: "Success",
  },
  {
    id: "2",
    title: "Test 2",
    description: "Test 2 description",
    importance: "Danger",
  },
  {
    id: "3",
    title: "Test 3",
    description: "Test 3 description",
    importance: "Warning",
  },
  {
    id: "4",
    title: "Test 4",
    description: "Test 4 description",
    importance: "Success",
  },
  {
    id: "5",
    title: "Test 5",
    description: "Test 5 description",
    importance: "Danger",
  },
  {
    id: "6",
    title: "Test 6",
    description: "Test 6 description",
    importance: "Warning",
  },
];

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = (card) => {
    cards.push({
      id: Math.random(),
      title: card.title,
      description: card.description,
      importance: card.importance
    })
    setShow(false);
  };
  const handleDelete = (data) => {
    console.log(data)
  }
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid">
      <Button className="float-end button-circle" onClick={handleShow}>
        +
      </Button>
      <ModalCard show={show} handleClose={handleClose} />
      <div className="row">
        {cards.map((i) => (
          <div className="col-sm-3">
            <TaskCard
              key={i.id}
              title={i.title}
              description={i.description}
              importance={i.importance}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
