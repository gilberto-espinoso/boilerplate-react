import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(screen.getByRole('heading', { name: /react avançado/i })).toContain

    expect(container.firstChild).toMatchSnapshot()
  })
})
