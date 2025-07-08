import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counters from './Counters'

it('counter updates correctly on button clicks', async () => {
  const user = userEvent.setup()
  render(<Counters />)

  expect(screen.getByText('0')).toBeInTheDocument()

  await user.click(screen.getByText('+'))
  expect(screen.getByText('1')).toBeInTheDocument()

  await user.click(screen.getByText('-'))
  expect(screen.getByText('0')).toBeInTheDocument()

  await user.click(screen.getByText('-'))
  expect(screen.getByText('-1')).toBeInTheDocument()
})