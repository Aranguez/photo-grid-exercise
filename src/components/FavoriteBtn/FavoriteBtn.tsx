import React, { FC } from 'react'

export type Props = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}

const FavoriteBtn: FC<Props> = ({ toggle, isActive }) => (
  <button
    type="button"
    onClick={() => toggle(!isActive)}
    className={`
      ${isActive ? 'text-white bg-blue-900 hover:bg-blue-700 dark:bg-white dark:text-black' : 'text-gray-900 bg-white hover:bg-gray-100'}
      border border-gray-300
      rounded-full
      px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800
      dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
    `}
  >
    Favorites
  </button>
)

export default React.memo(FavoriteBtn)