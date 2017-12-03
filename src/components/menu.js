import React from "react";
import PropTypes from "prop-types";

const menuItems = ['work', 'about', 'resume'];

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className='menuContainer col--2 inline-block h-full fl'>
			{menuItems.map((item, i) =>
				<h4 value={item} key={i} onClick={this.props.changePage} className={`${this.props.page === item ? 'active' : ''} menuItem`}>{item}</h4>
			)}
			</div>
		);
	}
}

Menu.propTypes = {
  page: PropTypes.string,
  changePage: PropTypes.func
};

export default Menu;
