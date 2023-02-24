import { useQuery } from 'react-query'

import { getAllHeroes } from './heroes'

export const useGetAllHeroes = () => {
  return useQuery('all_heroes', getAllHeroes)
}