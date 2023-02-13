import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App test cases', () => {
    it('Load App', () => {
        render(<App />)
        const text = screen.getByText('Test 1')
        expect(text).toBeInTheDocument()
    })
    it('Open modal', () => {
        render(<App />)
        const addButton = screen.getByTestId('addButton')
        userEvent.click(addButton)
        const title = screen.getByText('Add new task')

        expect(title).toBeInTheDocument()

        const closeButton = screen.getByRole('button', { name: /Close/ })
        userEvent.click(closeButton)
    })

    it('Close modal', () => {
        render(<App />)
        const addButton = screen.getByTestId('addButton')
        userEvent.click(addButton)
        const closeButton = screen.getByRole('button', { name: /Close/ })
        userEvent.click(closeButton)
        const text = screen.getByText('Test 1')
        expect(text).toBeInTheDocument()
    })

    it('Save task', () => {
        render(<App />)
        const addButton = screen.getByTestId('addButton')
        userEvent.click(addButton)
        const titleTextBox = screen.getByTestId('title')
        const descriptionTextBox = screen.getByTestId('description')
        userEvent.type(titleTextBox, 'test')
        userEvent.type(descriptionTextBox, 'test description')
        const submitButton = screen.getByRole('button', {
            name: /Save Changes/,
        })
        userEvent.click(submitButton)

        const text = screen.getByText('test')
        expect(text).toBeInTheDocument()
    })
})
