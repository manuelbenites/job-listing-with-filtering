function Header(props) {
	return (
		<div className="header">
			<img className="header__img" src="images/bg-header-desktop.svg" />
			{props.filterState.length == 0 ? (
				<div className="separation--filter--off"></div>
			) : (
				<div className="separation--filter--on"></div>
			)}
		</div>
	)
}

export default Header
