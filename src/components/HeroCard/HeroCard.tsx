import React, { FC } from 'react'

import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'
import { useAppDispatch } from 'store'
import { toggleFavorite } from 'store/features/heroSlice'

export type Props = {
  id: number;
  name: string;
  image: string;
  height: string;
  weight: string;
  isFavorite: boolean;
};

const HeroCard: FC<Props> = ({ id, image, name, height, weight, isFavorite }) => {
  const dispatch = useAppDispatch()

  return (
    <div data-testid='hero' className="w-48 h-60 rounded-md flex items-end relative overflow-hidden cursor-pointer group">
      <button onClick={() => dispatch(toggleFavorite(id))} className='absolute top-0 right-0 z-30 bg-white rounded-bl-lg p-2'>
        {isFavorite ?
          <AiTwotoneStar size='20' className='text-yellow-600' data-testid='favorite' /> :
          <AiOutlineStar size='20' data-testid='not-favorite' />}
      </button>
      <div className='relative z-20 p-5 select-none'>
        <h5 className='text-white font-bold text-lg'>{name}</h5>
        <p className='text-white'>height: {height}</p>
        <p className='text-white'>weight: {weight}</p>
      </div>
      <img src={image} alt="hero-img" className='transition duration-150 ease-in-out brightness-50 group-hover:brightness-100 group-hover:scale-105 absolute z-10' />
    </div >
  )
}

export default React.memo(HeroCard)