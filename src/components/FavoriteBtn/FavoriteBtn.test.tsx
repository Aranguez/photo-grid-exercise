import { render, screen, fireEvent, cleanup } from 'test-utils'
import { it, vi, expect, describe, afterEach, beforeEach } from 'vitest'
import FavoriteBtn, { Props } from './FavoriteBtn'

const toggleMock = vi.fn()

const initialProps: Props = {
  isActive: false,
  toggle: toggleMock
}

const setup = (props = initialProps) => {
  return render(<FavoriteBtn {...props} />)
}

describe('FavoriteBtn', () => {
  afterEach(cleanup)
  beforeEach(() => {
    toggleMock.mockClear()
  })

  it('should change to dark mode', () => {
    setup()

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(toggleMock).toBeCalledWith(true)
    expect(toggleMock).toHaveBeenCalledOnce()
  })

  it('should be dark at first', () => {
    setup({ ...initialProps, isActive: true })

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(toggleMock).toBeCalledWith(false)
    expect(toggleMock).toHaveBeenCalledOnce()
  })
})

