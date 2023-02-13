import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskCard from './TaskCard'
const mockData = {
    title: 'test',
    description: 'test description',
    importance: 'Primary',
}
describe('TaskCard', () => {
    it('Load Task Card', () => {
        const handleDelete = jest.fn()
        render(
            <TaskCard
                title={mockData.title}
                description={mockData.description}
                importance={mockData.importance}
                handleDelete={handleDelete}
            />
        )
        const title = screen.getByText('test')
        expect(title).toBeInTheDocument()
    })
    it('Delete Task Card', () => {
        const handleDelete = jest.fn()
        render(
            <TaskCard
                title={mockData.title}
                description={mockData.description}
                importance={mockData.importance}
                handleDelete={handleDelete}
            />
        )
        const deleteButton = screen.getByRole('button')
        userEvent.click(deleteButton)
    })
})
