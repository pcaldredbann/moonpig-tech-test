// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import CardItem from './cardItem';
import './cardCatalog.scss';

class CardCatalog extends PureComponent {
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