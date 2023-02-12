import { Button } from "react-bootstrap";
import TaskCard from "./components/taskCard/TaskCard";

const cards = [
  { title: "Test 1", description: "Test 1 description", importance: "Success" },
  { title: "Test 2", description: "Test 2 description", importance: "Danger" },
  { title: "Test 3", description: "Test 3 description", importance: "Warning" },
  { title: "Test 4", description: "Test 4 description", importance: "Success" },
  { title: "Test 5", description: "Test 5 description", importance: "Danger" },
  { title: "Test 6", description: "Test 6 description", importance: "Warning" },
];

const App = () => (
  <div className="container-fluid">
    <div className="d-flex justify-content-between">
      <div className="row">
        {cards.map((i) => (
          <div class="col-sm-3">
            <TaskCard
              key={i.title}
              title={i.title}
              description={i.description}
              importance={i.importance}
            />
          </div>
        ))}
      </div>
      <Button>+</Button>
    </div>
  </div>
)

export default App;
