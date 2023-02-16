import data from "./data/data.json"
import RenderCard from "./components/RenderCard.jsx"
import Header from "./components/Header.jsx"
import FilterTable from "./components/FilterTable.jsx"
import { useState } from "react"

function App() {
	const [filterCategorie, setFilterCategorie] = useState("")
	const handleCategorie = (e) => {
		e.preventDefault()
		setFilterCategorie(e.target.value)
	}
	const handleClear = (e) => {
		e.preventDefault()
		setFilterCategorie("")
	}
	return (
		<div className="App">
			<Header />
			{filterCategorie !== "" && (
				<FilterTable clear={handleClear} getFilter={filterCategorie} />
			)}
			<div className="cards">
				{filterCategorie === ""
					? data.map((card) => (
							<RenderCard
								getFilter={handleCategorie}
								key={card.id}
								card={card}
							/>
					  ))
					: data
							.filter((card) => card.categories.includes(filterCategorie))
							.map((cardFiltered) => (
								<RenderCard
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
