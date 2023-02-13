import { Card, Button } from 'react-bootstrap'

const TaskCard = ({ title, description, importance, handleDelete }) => {
    const onDelete = () => {
        handleDelete(title)
    }
    return (
        <Card
            bg={importance.toLowerCase()}
            style={{ width: '18rem', height: '12rem', marginBottom: '10px' }}
        >
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title className="d-inline">{title}</Card.Title>
                    <Button variant="outline-dark" onClick={onDelete}>
                        <i className="fa-solid fa-trash" />
                    </Button>
                </div>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default TaskCard
