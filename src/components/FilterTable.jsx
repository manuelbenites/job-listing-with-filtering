function FilterTable(props) {
	return (
		<div className="filtertable">
			<div className="filtertable--item">{props.getFilter}</div>
			<button className="filtertable--button" onClick={props.clear}>
				Clear
			</button>
		</div>
	)
}

export default FilterTable
