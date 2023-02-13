import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ModalCard from './ModalCard'

describe('Modal card', () => {
    it('Modal card is rendering', () => {
        const show = true
        const handleClose = jest.fn()
        render(<ModalCard show={show} handleClose={handleClose} />)
        const text = screen.getByText('Add new task')
        expect(text).toBeInTheDocument()
    })

    it('Modal card closes', () => {
        const show = true
        const handleClose = jest.fn()
        render(<ModalCard show={show} handleClose={handleClose} />)
        const submitButton = screen.getByRole('button', { name: /Close/ })

        userEvent.click(submitButton)
    })

    it('Modal card submit data', () => {
        const show = true
        const handleClose = jest.fn()
        render(<ModalCard show={show} handleClose={handleClose} />)
        const titleTextBox = screen.getByTestId('title')
        const descriptionTextBox = screen.getByTestId('description')

        userEvent.type(titleTextBox, 'test')
        userEvent.type(descriptionTextBox, 'test description')

        const submitButton = screen.getByRole('button', {
            name: /Save Changes/,
        })

        userEvent.click(submitButton)

        expect(handleClose).toBeCalled()
    })

    it('Modal card submit data empty title', () => {
        const show = true
        const handleClose = jest.fn()
        render(<ModalCard show={show} handleClose={handleClose} />)

        const submitButton = screen.getByRole('button', {
            name: /Save Changes/,
        })

        userEvent.click(submitButton)

        const text = screen.getByText('Add new task')
        expect(text).toBeInTheDocument()
    })
})
