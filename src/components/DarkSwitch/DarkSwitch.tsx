import React, { FC } from 'react'

import { IoMoonSharp, IoMoonOutline } from 'react-icons/io5'

export type Props = {
  darkMode: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkSwitch: FC<Props> = ({ darkMode, toggle }) => (
  <button className='mr-4' onClick={() => toggle(!darkMode)}>
    {darkMode ?
      <IoMoonSharp data-testid="moon-dark" className='text-3xl text-white' /> :
      <IoMoonOutline data-testid="moon-no-dark" className='text-3xl ' />}
  </button>
)

export default React.memo(DarkSwitch)