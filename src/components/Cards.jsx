function Cards(props) {
	return (
		<div key={props.card.id} className="card">
			<div className="card--before"></div>
			<img className="card__logo" src={props.card.logo} alt="logo" />
			<div className="card__container__rows">
			<div className="card__first__row">
				<div className="card__first__row--company">{props.card.company}</div>
				{props.card.new && <div className="card__first__row--new">NEW</div>}
				{props.card.featured && (
					<div className="card__first__row--featured">FEATURED</div>
				)}
			</div>
			<div className="card__position">{props.card.position}</div>
			<div className="card__second__row">
				<div className="card__second__row--item">{props.card.postedAt}</div>
				<div className="card__second__row--oval"></div>
				<div className="card__second__row--item">{props.card.contract}</div>
				<div className="card__second__row--oval"></div>
				<div className="card__second__row--item">{props.card.location}</div>
			</div>
			</div>
			<div className="card__separator__line"></div>
			<div className="card__categories">
				{props.card.categories.map((item) => {
					return (
						<button
							onClick={props.getFilter}
							key={item}
							value={item}
							className="card__categories--item"
						>
							{item}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default Cards
