import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardLink, Row, Col } from 'reactstrap';
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
					<Col sm="6" key={prod.id}>
						<Card onMouseOver={this.showSelectionHighlight}>
							<CardBody>
								<CardTitle>{prod.name}</CardTitle>
								<CardSubtitle>{prod.subTitle}</CardSubtitle>
							</CardBody>
							<img width="100%" src={prod.thumbnail} alt="Card image cap" />
							<CardBody>
								<CardText>{prod.description}</CardText>
								<Button className="btn btn-success col-md-6">Buy Now</Button>
							</CardBody>
						</Card>
					</Col>
				))}
			</Row>
		);
	}
}
