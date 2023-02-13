import './App.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import ModalCard from './components/ModalCard/ModalCard'
import TaskCard from './components/TaskCard/TaskCard'

const tasks = [
    {
        id: '1',
        title: 'Test 1',
        description: 'Test 1 description',
        importance: 'Success',
    },
    {
        id: '2',
        title: 'Test 2',
        description: 'Test 2 description',
        importance: 'Danger',
    },
    {
        id: '3',
        title: 'Test 3',
        description: 'Test 3 description',
        importance: 'Warning',
    },
    {
        id: '4',
        title: 'Test 4',
        description: 'Test 4 description',
        importance: 'Success',
    },
    {
        id: '5',
        title: 'Test 5',
        description: 'Test 5 description',
        importance: 'Danger',
    },
    {
        id: '6',
        title: 'Test 6',
        description: 'Test 6 description',
        importance: 'Warning',
    },
]

const App = () => {
    const [show, setShow] = useState(false)
    const [cards, setCards] = useState(tasks)

    const handleDelete = (title) => {
        const current = cards.filter((m) => m.title !== title)
        const newCards = [...current]
        setCards(newCards)
    }

    const handleClose = (card) => {
        if (card) {
            cards.push({
                id: Math.random(),
                title: card.title,
                description: card.description,
                importance: card.importance,
            })
        }
        setShow(false)
    }
    const handleShow = () => setShow(true)

    return (
        <div className="container-fluid">
            <h1>Task Organizer</h1>
            <Button
                data-testid="addButton"
                className="float-end button-circle"
                onClick={handleShow}
            >
                <i className="fa-solid fa-plus" />
            </Button>
            <ModalCard show={show} handleClose={handleClose} />
            <div className="row">
                {cards.map((i) => (
                    <div className="col-sm-3" key={i.id}>
                        <TaskCard data={i} handleDelete={handleDelete} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
