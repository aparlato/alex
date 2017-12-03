import React from "react";
import Menu from "./menu";
import Work from "./work";
import About from "./about";
import { HashRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: "work"
		};
	}

	changePage(ev) {
		this.setState({ page: ev.target.attributes.value.value });
	}

	render() {
		return (
			<div className="app">
				<Menu
					page={this.state.page}
					changePage={this.changePage.bind(this)}
				/>
				{/*<Work />*/}
				<HashRouter>
					<div>
						<Route exact path="/" component={Work} />
						<Route path="/about" component={About} />
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default App;
