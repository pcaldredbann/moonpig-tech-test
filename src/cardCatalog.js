import React, { Component } from 'react';
import { Row } from 'reactstrap';
import CardItem from './cardItem';
import './cardCatalog.scss';

export default class CardCatalog extends Component {
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
