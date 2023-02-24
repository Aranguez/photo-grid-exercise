import React, { FC } from 'react'

import HeroCard from 'components/HeroCard'

import { useAppSelector } from 'store'
import { AiOutlineFrown } from 'react-icons/ai'

export type Props = {
  search: string;
  onlyFavorites: boolean;
}

const HeroesList: FC<Props> = ({ search = '', onlyFavorites = false }) => {
  const heroes = useAppSelector((state) => state.heroes.all)
  const favoriteHeroes = useAppSelector((state) => state.heroes.favorites)

  const filteredHeroes = heroes.filter(hero => {
    const filterBySearch = hero.name.toLowerCase().includes(search.toLowerCase())
    const isFavorite = favoriteHeroes.includes(hero.id)

    return filterBySearch && (onlyFavorites ? isFavorite : true)
  })

  if (filteredHeroes.length === 0) {
    return (
      <div className='flex items-center justify-center w-full h-screen text-center flex-col'>
        <AiOutlineFrown className='block text-8xl mb-5 dark:text-white' />
        <h3 className='text-2xl text-bold dark:text-white'>No heroes found</h3>
      </div>
    )
  }

  return (
    <section className='grid grid-flow-row-dense gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
      {filteredHeroes.map(hero => (
        <HeroCard
          key={hero.id}
          id={hero.id}
          name={hero.name}
          image={hero.images.md}
          height={hero.appearance.height[1]}
          weight={hero.appearance.weight[1]}
          isFavorite={favoriteHeroes.includes(hero.id)}
        />
      ))}
    </section>
  )
}

export default React.memo(HeroesList)