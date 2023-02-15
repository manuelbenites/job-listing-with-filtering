import data from "./data/data.json"
import RenderCard from "./components/RenderCard.jsx"

function App() {
	let condition = "Junior"
	return (
		<div className="App">
			<div className="header">
				<img className="header__img" src="images/bg-header-desktop.svg" />
			</div>
			<div className="filtertable">conditio</div>
			<div className="cards">
				{condition === ""
					? data.map((card) => <RenderCard key={card.id} card={card} />)
					: data
							.filter((card) => card.categories.includes(condition))
							.map((cardFiltered) => (
								<RenderCard key={cardFiltered.id} card={cardFiltered} />
							))}
			</div>
		</div>
	)
}

export default App
