// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import {
	Card,
	Col,
	CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import './cardItem.scss';

class CardItem extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Col sm={4}>
				<Card>
					<CardImg src={this.props.imageUrl} />
				</Card>
			</Col>
		);
	}

}

CardItem.propTypes = {
	imageUrl: PropTypes.string.isRequired
};

export default CardItem;
