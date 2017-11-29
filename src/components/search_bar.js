import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);	
		
		this.state = { term: '' };
	}
	
	render () {
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value})} />
				
			</div>
		);
	}
	
	//What is inside the curly braces in the render function //is the same as -
	
	//onInputChange(e) {
	//	console.log(e.target.value);
	//}
}

export default SearchBar;