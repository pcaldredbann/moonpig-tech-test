import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Col } from 'reactstrap';
import TextBlock from './components/textBlock';
const TextBlockConfig = {
    config: {
        limit: 25
    }
};

export default class CardItem extends Component {
	constructor(args) {
        super(args);
        
		this.showSelectionHighlight = this.showSelectionHighlight.bind(this);
	}

	showSelectionHighlight() {}

	render() {
		return (
			<Col sm="6">
				<Card onMouseOver={this.showSelectionHighlight}>
					<CardBody>
						<CardTitle>{this.props.product.name}</CardTitle>
						<CardSubtitle>{this.props.product.subTitle}</CardSubtitle>
					</CardBody>
					<img width="100%" src={this.props.product.thumbnail} alt="Card image cap" />
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
