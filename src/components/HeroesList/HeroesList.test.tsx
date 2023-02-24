import { render, screen, cleanup } from 'test-utils'
import { it, describe, afterEach, expect } from 'vitest'

import HeroesList, { Props } from './HeroesList'
import { heroMock } from 'mocks/hero-mock'
import { Hero } from 'types/Hero'

const initialProps: Props = {
  search: '',
  onlyFavorites: false
}

const setup = (props = initialProps, heroes: Hero[] = [], favorites: number[] = []) => {
  render(<HeroesList {...props} />, {
    preloadedState: {
      heroes: {
        all: heroes,
        favorites
      }
    }
  })
}

describe('HeroesList', () => {
  afterEach(cleanup)

  it('should render an empty list of heroes', () => {
    setup()
    const heroes = screen.queryAllByTestId('hero')
    expect(heroes).toHaveLength(0)
    screen.getByText('No heroes found')
  })

  it('should render a list with 2 heroes', () => {
    setup(initialProps, [heroMock, { ...heroMock, id: 2 }])
    const heroes = screen.queryAllByTestId('hero')
    expect(heroes).toHaveLength(2)
  })

  it('should render a list with 0 favorites', () => {
    setup(
      { ...initialProps, onlyFavorites: true },
      [heroMock, { ...heroMock, id: 2 }]
    )
    const heroes = screen.queryAllByTestId('hero')
    expect(heroes).toHaveLength(0)
    screen.getByText('No heroes found')
  })

  it('should render a list with 1 favorites', () => {
    setup(
      { ...initialProps, onlyFavorites: true },
      [heroMock, { ...heroMock, id: 2 }],
      [2]
    )
    const heroes = screen.queryAllByTestId('hero')
    expect(heroes).toHaveLength(1)
  })
})

