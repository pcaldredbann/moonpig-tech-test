import React, { Component } from 'react';

class TextBlock extends Component {
    constructor(args) {
        super(args);

        this.isCollapsable = this.isCollapsable.bind(this);
    }

	isCollapsable(text, limit) {
		return text && text.length > limit;
	}

	render() {
		if (this.isCollapsable(this.props.text, this.props.config.limit)) {
			return <p>{this.props.text.substring(0, this.props.config.limit).trim() + '...'}</p>;
		}

		return <p>{this.props.text}</p>;
	}
}

TextBlock.defaultProps = {
    config: {
        limit: 10
    }
};

export default TextBlock;