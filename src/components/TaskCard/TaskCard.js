import { Card, Button } from 'react-bootstrap'

const TaskCard = ({ data, handleDelete }) => {
    const onDelete = () => {
        handleDelete(data.title)
    }
    return (
        <Card
            bg={data.importance.toLowerCase()}
            style={{ width: '18rem', height: '12rem', marginBottom: '10px' }}
        >
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title className="d-inline">{data.title}</Card.Title>
                    <Button
                        variant="outline-dark"
                        onClick={onDelete}
                        data-testid={data.id}
                    >
                        <i className="fa-solid fa-trash" />
                    </Button>
                </div>
                <Card.Text>{data.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default TaskCard
