import { render, screen } from '@testing-library/react'
import UserProfile from './UserProfile'

it('renders user data correctly', () => {
  const userData = {
    name: 'Eklavya',
    email: 'eklavya@gmail.com',
    phone: '123-456-7890'
  }

  render(<UserProfile {...userData} />)

  expect(screen.getByText('Eklavya')).toBeInTheDocument()
  expect(screen.getByText('eklavya@gmail.com')).toBeInTheDocument()
  expect(screen.getByText('123-456-7890')).toBeInTheDocument()
})

it('renders different user data correctly', () => {
  const userData = {
    name: 'Eklavya',
    email: 'eklavya@test.com',
    phone: '987-654-3210'
  }

  render(<UserProfile {...userData} />)

  expect(screen.getByText('Eklavya')).toBeInTheDocument()
  expect(screen.getByText('eklavya@test.com')).toBeInTheDocument()
  expect(screen.getByText('987-654-3210')).toBeInTheDocument()
})