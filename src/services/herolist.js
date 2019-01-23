import React, { Component } from "react";

const url = "https://api.opendota.com/api/heroes"

class HeroList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			heroes: []
		}
	}

	componentDidMount(){
		fetch(`${url}/${this.state.query}`)
		.then(response => response.json())
		.then (d =>
			this.setState({
				heroes: d
			})
		)
		.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
	}

	handleInputChange = () => {
		this.setState({
			query: this.search.value
		}, () => {
			if(this.state.query && this.state.query.length > 1) {
				this.componentDidMount()
			}
		})
	}

	render() {
		// console.log(this.state.heroes);

		return (
			<div>
				<h1>HEROES</h1>
				<select name="heroes">
					{this.state.heroes.map(hero => <option key={hero.id} value={hero.name}>{hero.localized_name}</option>)}
				</select>
			</div>
		);
	}
}

export default HeroList;