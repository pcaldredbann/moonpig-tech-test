// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import {
	Row,
	Col,
	Card
} from 'reactstrap';
import Image from 'react-image-resizer';
import './cardCatalog.scss';

class CardCatalog extends PureComponent {
	constructor() {
		super();

		this.state = {
			products: []
		};
	}

	componentDidMount() {
		const query = encodeURIComponent({
			size: 1,
			searchFacets: 'occasion_level_3:occasion%3Ewell%20done%3Enew%20job'
		});
		fetch(`/api/products?${query}`)
			.then(resp => {
				return resp.json();
			}).then(json => {
				let index = 0;
				const products = json.Products.map(prod => {
					return (
						<Col sm={6} key={++index}>
							<Card className="card-catalog-item">
								<Image
									src={prod.ProductImage.Link.Href}
									noImageSrc="https://via.placeholder.com/240"
									height={240}
									width={240}
									className="card-image"
								/>
							</Card>
						</Col>
					);
				});

				this.setState({ products: products });
			});
	}

	render() {
		return (
			<Row>
				{this.state.products}
			</Row>
		);
	}
}

export default CardCatalog;