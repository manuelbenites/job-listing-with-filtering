import IconRemove from "/images/icon-remove.svg"

function FilterTable(props) {
	return (
		<div className="filtertable">
			<div className="filtertable__container">
				<div className="filtertable__container__item">
					{props.getFilter.map((item, index) => (
						<div key={index} className="filtertable__item">
							<div className="filtertable__item--text">{item}</div>
							<button
								onClick={props.removeCategorie}
								value={item}
								className="filter__icon__container"
							>
								<img className="filter--icon" src={IconRemove} />
							</button>
						</div>
					))}
				</div>
				<button className="filtertable--button" onClick={props.clear}>
					Clear
				</button>
			</div>
		</div>
	)
}

export default FilterTable
