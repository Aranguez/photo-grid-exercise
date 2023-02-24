import { render, screen } from 'test-utils'
import { it, describe, expect } from 'vitest'

import HeroCard, { Props } from './HeroCard'

const initialProps: Props = {
  id: 1,
  name: 'Hero name',
  image: 'image url',
  height: '210 cm',
  weight: '93 kg',
  isFavorite: false,
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
})