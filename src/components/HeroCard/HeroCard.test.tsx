import userEvent from '@testing-library/user-event'
import { render, screen } from 'test-utils'
import { it, describe, expect } from 'vitest'

import HeroCard, { Props } from './HeroCard'

const initialProps: Props = {
  id: 1,
  name: 'Hero name',
  image: 'image url',
  height: '210 cm',
  weight: '93 kg',
}

const setup = (props = initialProps) => {
  render(<HeroCard {...props} />)
}

describe('HeroCard', () => {
  it('should render component correctly', () => {
    setup()

    screen.getByText('Hero name')
    screen.getByText('height: 210 cm')
    screen.getByText('weight: 93 kg')

    expect((screen.getByRole('img') as HTMLImageElement).src).toBe('image url')
  })

  it('should save hero as favorite', () => {
    setup()

    const favBtn = screen.getByRole('button')

    screen.getByTestId('not-favorite')
    expect(screen.queryByTestId('favorite')).toBeNull()

    userEvent.click(favBtn)

    expect(screen.queryByTestId('not-favorite')).toBeNull()
    screen.getByTestId('favorite')
  })

  it('should add hero as favorite and then remove it', () => {
    setup()

    const favBtn = screen.getByRole('button')

    userEvent.click(favBtn)
    expect(screen.queryByTestId('not-favorite')).toBeNull()
    screen.getByTestId('favorite')

    userEvent.click(favBtn)
    expect(screen.queryByTestId('favorite')).toBeNull()
    screen.getByTestId('not-favorite')
  })
})