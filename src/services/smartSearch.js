import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './suggestions'


const url = "https://api.opendota.com/api/heroes"

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			heroes: []
		}
	}

	componentDidMount(){
		fetch(`${url}`)
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
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.componentDidMount()
        }
      } else if (!this.state.query) {
      }
    })
	}
	
	render() {
		console.log(this.state.heroes)
		return (
			<form>
			  <input
				className="smartSearch"
				placeholder="Hero name..."
				ref={input => this.search = input}
				onChange={this.handleInputChange}
			  />
					<Suggestions results={this.state.heroes}></Suggestions>
			</form>
			
		  )
	}
}

export default Search;