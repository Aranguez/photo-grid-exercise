const BASE_URL = 'https://akabab.github.io/superhero-api/api'

export const getAllHeroes = () => {
  return fetch(`${BASE_URL}/all.json`)
    .then(res => res.json())
    .catch(err => {
			console.error('error while fetching heroes', err)
		})
}