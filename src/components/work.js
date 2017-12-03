import React from "react";
import PropTypes from "prop-types";

class Work extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className='workContainer col--10 inline-block h-full fr'>
			 <div className='bg-pink'>Hello</div>
			</div>
		);
	}
}

Work.propTypes = {
};

export default Work;
