import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
	ListGroup,
	ListGroupItem,
	Row,
	Col,
	Input,
	InputGroup,
	InputGroupAddon,
	Button
} from 'reactstrap';
import CurrencyFormat from 'react-currency-format';

export default class ProductSizesPanel extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		disabled: PropTypes.bool
	}

	static defaultProps = {
		disabled: false
	};

	constructor(props) {
		super(props);

		this.handleBasketClick = this.handleBasketClick.bind(this);
	}

	handleBasketClick() {
		window.alert('Coming soon! Maybe...');
	}

	render() {
		const {
			items,
			disabled
		} = this.props;

		return (
			<ListGroup>
				{items.map(size => {
					return (
						<ListGroupItem key="size.id">
							<Row>
								<Col sm={12} md={6}>
									<p>{size.name.concat(' ').concat(size.description)}</p>
								</Col>
								<Col sm={12} md={6}>
									<InputGroup>
										<InputGroupAddon addonType="prepend">
											<Button className="btn btn-success" disabled={disabled} onClick={this.handleBasketClick}>-</Button>
										</InputGroupAddon>
										<CurrencyFormat
											value={size.price}
											displayType="text"
											prefix={size.currency}
											renderText={val => <Input value={val} disabled />}
											thousandSeparator
										/>
										<InputGroupAddon addonType="append">
											<Button className="btn btn-success" disabled={disabled} onClick={this.handleBasketClick}>+</Button>
										</InputGroupAddon>
									</InputGroup>
								</Col>
							</Row>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		)
	}
}
