// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class componentName extends Component {

	static propTypes = {
		text: PropTypes.string.isRequired
	}

	setDangerousAbstract(text) {
		// this is REALLY not a good idea...
		return {
			__html: text
		};
	}

	render() {
		const {
			text
		} = this.props;

		return (
			<p dangerouslySetInnerHTML={this.setDangerousAbstract(text)}></p>
		)
	}
}
