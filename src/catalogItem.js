// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import {
	Row,
	Col,
	Breadcrumb,
	BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './catalogItem.scss';
import _ from 'lodash';
import ReactLoading from 'react-loading';
import ProductImageCarousel from './components/productImageCarousel';
import ProductDescriptionPanel from './components/productDescriptionPanel';
import ProductSizesPanel from './components/productSizesPanel';

export default class CatalogItem extends PureComponent {

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				productId: PropTypes.string.isRequired
			}).isRequired
		}).isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			productNo: '',
			images: [],
			title: '',
			soldOut: false,
			availableSizes: [],
			isLoading: true
		};
	}

	async componentDidMount() {
		const productId = this.props.match.params.productId;
		const response = await fetch(`/uk/api/product/product/?mpn=${productId}`, { mode: 'no-cors' });
		const json = await response.text();
		const moonpigProduct = JSON.parse(json);

		this.setState({
			productNo: moonpigProduct.MoonpigProductNo,
			images: this.parseAvailableImages(moonpigProduct),
			title: moonpigProduct.Description,
			soldOut: moonpigProduct.SoldOut,
			availableSizes: this.parseAvailableSizes(moonpigProduct),
			isLoading: false
		});
	}

	parseAvailableImages(product) {
		return product.ImageUrls.map(img => {
			return {
				id: img.ImageNo,
				src: img.ImageUrl
			};
		});
	}

	parseAvailableSizes(product) {
		const sizes = [];

		product.AvailableSizes.map(size => {
			return {
				id: size.Id,
				currency: size.Currency,
				description: size.Description,
				ordinal: size.DisplayOrder,
				name: size.Name,
				price: size.Price
			}
		});
		// merge in the size record that comes at the root of the product
		sizes.push({
			id: product.Size.Id,
			currency: product.Size.Currency,
			description: product.Size.Description,
			ordinal: product.Size.DisplayOrder,
			name: product.Size.Name,
			price: product.Size.Price
		});
		// now remove duplicates and sort sizes by given ordinal
		const cleanedSizes = _.uniqWith(sizes, _.isEqual);

		return _.sortBy(cleanedSizes, size => size.ordinal);
	}

	render() {
		const {
			productNo,
			images,
			title,
			soldOut,
			availableSizes,
			isLoading
		} = this.state;

		return (
			<div id="content" className="container">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<Link to="/">Products</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>
						<Link to="/cards/" params={{ productId: productNo }}>{productNo}</Link>
					</BreadcrumbItem>
				</Breadcrumb>
				{isLoading ? <ReactLoading type="bars" color="#fff" height={200} width={400} className="container-fluid" /> : ''}
				<Row>
					<Col sm={12} md={6}>
						<ProductImageCarousel items={images} />
					</Col>
					<Col sm={12} md={6}>
						<ProductDescriptionPanel text={title} />
						<ProductSizesPanel items={availableSizes} disabled={soldOut} />
					</Col>
				</Row>
			</div>
		);
	}

}