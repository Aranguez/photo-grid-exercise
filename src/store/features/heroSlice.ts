import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Hero } from 'types/Hero'

type HeroesState = {
  all: Hero[];
  favorites: number[];
}

const initialState: HeroesState = { all: [], favorites: [] }

export const HeroSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    saveHeroes: (state, action: PayloadAction<Hero[]>) => {
      state.all = action.payload
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(id => id !== action.payload)
        return
      }
      state.favorites.push(action.payload)
    }
  }
})

export default HeroSlice.reducer
export const { saveHeroes, toggleFavorite } = HeroSlice.actions