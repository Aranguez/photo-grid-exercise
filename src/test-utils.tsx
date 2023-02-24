import { FC, PropsWithChildren } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import heroReducer from './store/features/heroSlice'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { heroes: heroReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    return <Provider store={store}><QueryClientProvider client={queryClient}>{children}</QueryClientProvider></Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }