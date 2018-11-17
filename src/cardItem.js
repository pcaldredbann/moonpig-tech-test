// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
	Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import TextBlock from './components/textBlock';

const TextBlockConfig = {
	config: {
		limit: 150
	}
};

class CardItem extends PureComponent {
	render() {
		return (
			<Col sm="6">
				<Card>
					<CardBody>
						<CardTitle>{this.props.product.name}</CardTitle>
						<CardSubtitle>{this.props.product.subTitle}</CardSubtitle>
					</CardBody>
					<img width="100%" src={this.props.product.thumbnail} alt="" />
					<CardBody>
						<CardText>
							<TextBlock text={this.props.product.description} {...TextBlockConfig} />
						</CardText>
						<Button className="btn btn-success col-md-6">Buy Now</Button>
					</CardBody>
				</Card>
			</Col>
		);
	}
}

CardItem.propTypes = {
	product: PropTypes.object.isRequired
};

export default CardItem;
