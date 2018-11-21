// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {
	UncontrolledCarousel
} from 'reactstrap';

export default class ProductImageCarousel extends PureComponent {
	static propTypes = {
		items: PropTypes.array.isRequired
	}

	render() {
		const {
			items
		} = this.props;

		return (
			<UncontrolledCarousel items={items} />
		)
	}
}
