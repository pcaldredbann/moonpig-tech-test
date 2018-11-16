import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import CardItem from './cardItem';
import './cardCatalog.scss';

class CardCatalog extends Component {
	constructor(args) {
		super(args);
	}

	showSelectionHighlight() {}

	render() {
		return (
			<Row>
				{this.props.products.map(prod => (
                    <CardItem key={prod.id} product={prod} />
				))}
			</Row>
		);
	}
}

CardCatalog.propTypes = {
    products: PropTypes.array.isRequired
};

export default CardCatalog;