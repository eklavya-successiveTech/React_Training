import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'

it('accepts user input in username and password fields', async () => {
  const user = userEvent.setup()
  render(<LoginForm onSubmit={() => {}} />)

  const usernameInput = screen.getByPlaceholderText('Username')
  const passwordInput = screen.getByPlaceholderText('Password')

  await user.type(usernameInput, 'testuser')
  expect(usernameInput).toHaveValue('testuser')

  await user.type(passwordInput, 'testpass')
  expect(passwordInput).toHaveValue('testpass')
})

it('submits form with correct data when submit button is clicked', async () => {
  const user = userEvent.setup()
  const mockOnSubmit = jest.fn()
  render(<LoginForm onSubmit={mockOnSubmit} />)

  const usernameInput = screen.getByPlaceholderText('Username')
  const passwordInput = screen.getByPlaceholderText('Password')
  const submitButton = screen.getByText('Submit')

  await user.type(usernameInput, 'john')
  await user.type(passwordInput, 'password123')

  await user.click(submitButton)

  expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  expect(mockOnSubmit).toHaveBeenCalledWith({
    username: 'john',
    password: 'password123'
  })
})