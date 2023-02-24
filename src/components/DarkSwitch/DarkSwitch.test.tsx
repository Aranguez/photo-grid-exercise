import { render, screen, fireEvent, cleanup } from 'test-utils'
import { it, vi, expect, describe, afterEach, beforeEach } from 'vitest'
import DarkSwitch, { Props } from './DarkSwitch'

const toggleMock = vi.fn()

const initialProps: Props = {
  darkMode: false,
  toggle: toggleMock
}

const setup = (props = initialProps) => {
  return render(<DarkSwitch {...props} />)
}

describe('DarkSwitch', () => {
  afterEach(cleanup)
  beforeEach(() => {
    toggleMock.mockClear()
  })

  it('should change to dark mode', () => {
    setup()

    const moonBtn = screen.getByTestId('moon-no-dark')
    fireEvent.click(moonBtn)

    expect(toggleMock).toBeCalledWith(true)
    expect(toggleMock).toHaveBeenCalledOnce()
  })

  it('should be dark at first', () => {
    setup({ ...initialProps, darkMode: true })

    const moonBtn = screen.getByTestId('moon-dark')
    fireEvent.click(moonBtn)

    expect(toggleMock).toBeCalledWith(false)
    expect(toggleMock).toHaveBeenCalledOnce()
  })
})

