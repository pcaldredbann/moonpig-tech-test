// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextBlock extends PureComponent {
	constructor(args) {
		super(args);
	}

	isCollapsable(text, limit) {
		return text && text.length > limit;
	}

	render() {
		const {
			text,
			config: { limit }
		} = this.props;

		if (this.isCollapsable(text, limit)) {
			const truncated = text.substring(0, limit).trim();
			return <p>{truncated}</p>;
		}

		return <p>{text}</p>;
	}
}

TextBlock.propTypes = {
	text: PropTypes.string.isRequired,
	config: PropTypes.object.isRequired
};

export default TextBlock;
