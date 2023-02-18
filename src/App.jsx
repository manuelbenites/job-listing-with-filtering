import data from "./data/data.json"
import Cards from "./components/Cards.jsx"
import Header from "./components/Header.jsx"
import FilterTable from "./components/FilterTable.jsx"
import { useState } from "react"

function App() {
	const [filterCategorie, setFilterCategorie] = useState([])
	const handleCategorie = (e) => {
		e.preventDefault()
		let isWithin = filterCategorie.find((element) => element === e.target.value)
		if (!isWithin) {
			setFilterCategorie((filterCategorie) => [
				...filterCategorie,
				e.target.value,
			])
		}
	}
	const handleClear = (e) => {
		e.preventDefault()
		setFilterCategorie([])
	}
	const handleRemoveCategorie = (e) => {
		e.preventDefault()
		let indexOfElementToRemove = filterCategorie.findIndex(
			(element) => element === e.target.value
		)
		let newFilterCategorie = filterCategorie.filter(
			(item, index) => index !== indexOfElementToRemove
		)
		setFilterCategorie(newFilterCategorie)
	}

	return (
		<div className="App">
			<Header filterState={filterCategorie} />
			{filterCategorie.length > 0 && (
				<FilterTable
					clear={handleClear}
					getFilter={filterCategorie}
					removeCategorie={handleRemoveCategorie}
				/>
			)}
			<div className="cards">
				{filterCategorie.length == 0
					? data.map((card) => (
							<Cards getFilter={handleCategorie} key={card.id} card={card} />
					  ))
					: data
							.filter((card) => {
								return filterCategorie.find((categorieFilter) => {
									return card.categories.find((categorieData) => {
										return categorieData === categorieFilter
									})
								})
							})
							.map((cardFiltered) => (
								<Cards
									getFilter={handleCategorie}
									key={cardFiltered.id}
									card={cardFiltered}
								/>
							))}
			</div>
		</div>
	)
}

export default App
