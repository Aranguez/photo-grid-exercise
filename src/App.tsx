import { useEffect, useState } from 'react'

import { useGetAllHeroes } from 'api/hooks'
import HeroesList from 'components/HeroesList'
import { useAppDispatch } from 'store'
import { saveHeroes } from 'store/features/heroSlice'
import Search from 'components/Search'
import FavoriteBtn from 'components/FavoriteBtn'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import DarkSwitch from 'components/DarkSwitch'

function App() {
	const dispatch = useAppDispatch()

	const { data, isLoading } = useGetAllHeroes()

	useEffect(() => {
		if (!data) return
		dispatch(saveHeroes(data))
	}, [data])

	const [searchValue, setSearchValue] = useState('')
	const [showFavorites, setShowFavorites] = useState(false)
	const [darkMode, setDarkMode] = useState(false)

	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<div className="bg-slate-100 dark:bg-slate-900 min-h-screen">
				<div className='container mx-auto px-5'>
					{isLoading ? (
						<div data-testid="loader" className='flex items-center justify-center w-full h-screen'>
							<AiOutlineLoading3Quarters className='animate-spin h-10 w-10 grid place-content-center' />
						</div>
					) : (
						<>
							<header className='py-6 flex justify-between items-center'>
								<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">heroes</h1>
								<Search value={searchValue} onType={setSearchValue} />
								<div className='flex items-center'>
									<DarkSwitch
										darkMode={darkMode}
										toggle={setDarkMode}
									/>
									<FavoriteBtn
										isActive={showFavorites}
										toggle={setShowFavorites}
									/>
								</div>
							</header>
							<HeroesList search={searchValue} onlyFavorites={showFavorites} />
						</>
					)}
				</div>
			</div>
		</div>

	)
}

export default App
