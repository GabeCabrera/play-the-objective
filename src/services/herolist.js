import React, { Component } from "react";
import Request from "superagent";

const url = "https://api.opendota.com/api/heroes"

class HeroList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroes: []
		}
	}

	componentDidMount(){
		fetch(url)
		.then(response => response.json())
		.then (d =>
			this.setState({
				heroes: d
			})
		)
		.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
	}

	render() {
		console.log(this.state.heroes);

		return (
			<div>
				<h1>HEROES</h1>
				{this.state.heroes.map(hero => <div>{hero.localized_name}</div>)}
			</div>
		);
	}
}

export default HeroList;