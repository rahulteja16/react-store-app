import React, { Component } from 'react';
import Classes from './App.css';
import Shop from './container/shop/shop'

class App extends Component {
	render() {
		return (
			<div className={Classes.App}>
				<Shop />
			</div>
		);
	}
}

export default App;
