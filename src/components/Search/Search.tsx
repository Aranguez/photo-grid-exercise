import React, { FC } from 'react'

export type Props = {
  value: string;
  onType: (value: string) => void;
}

const Search: FC<Props> = ({ value, onType }) => (
  <div>
    <input
      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      placeholder="Search for heroes..."
      type="text"
      name="search"
      value={value}
      onChange={(e) => onType(e.target.value)}
    />
  </div>
)

export default React.memo(Search)