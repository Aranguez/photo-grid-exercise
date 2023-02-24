import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'
import { it, vi, expect, describe, afterEach, beforeEach } from 'vitest'

import Search, { Props } from './Search'

const onTypeMock = vi.fn()

const initialProps: Props = {
  value: '',
  onType: onTypeMock
}

const setup = (props = initialProps) => {
  render(<Search {...props} />)
}

describe('Search', () => {
  beforeEach(() => {
    setup()
  })

  afterEach(() => {
    onTypeMock.mockClear()
  })

  it('should have initially an empty value', () => {
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(onTypeMock).not.toBeCalled()
    expect(input.value).toBe('')
  })

  it('should have type a hero name', async () => {
    const input = screen.getByRole('textbox') as HTMLInputElement
    userEvent.type(input, 'Hero Name')
    expect(onTypeMock).toBeCalledWith('e')
  })
})