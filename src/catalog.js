// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import {
	Row,
	Col,
	Card,
	Breadcrumb,
	BreadcrumbItem,
	InputGroup,
	Input
} from 'reactstrap';
import qs from 'query-string';
import Image from 'react-image-resizer';
import './catalog.scss';
import Pagination from 'react-paginate';
import ReactLoading from 'react-loading';

export default class Catalog extends PureComponent {

	static propTypes = {
	}

	static defaultProps = {
	};

	constructor(props) {
		super(props);

		this.state = {
			products: [],
			numberOfProducts: 0,
			currentPage: 0,
			pageSize: 10,
			query: null,
			isLoading: true
		};

		this.handlePageChange = this.handlePageChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentWillMount() {
		this.getCatalogList();
	}

	async getCatalogList() {
		let query = {
			size: this.state.pageSize,
			start: this.state.currentPage === 0 ? 0 : (this.state.currentPage + 1) * this.state.pageSize,
			q: this.state.query,
			searchFacets: 'occasion_level_3:occasion>well done>new job'
		};
		if (this.state.query && this.state.query.length > 0) {
			delete query.searchFacets;
		} else {
			delete query.q;
		}

		const response = await fetch(`/api/products?${qs.stringify(query)}`, { mode: 'no-cors' });
		const responseBody = await response.json();

		this.setState({
			products: responseBody ? responseBody.Products : [],
			numberOfProducts: responseBody ? responseBody.NumberOfProducts : 0,
			isLoading: false
		});
	}

	handlePageChange(pageNumber) {
		if (pageNumber !== this.state.currentPage) {
			this.setState({
				isLoading: true,
				currentPage: pageNumber.selected
			}, this.getCatalogList);
		}
	}

	handleSearch(e) {
		this.setState({
			query: e.target.value,
			isLoading: true
		}, this.getCatalogList);
	}

	render() {
		const {
			products,
			numberOfProducts,
			currentPage,
			pageSize,
			isLoading
		} = this.state;

		return (
			<div id="content" className="container">
				<Breadcrumb>
					<BreadcrumbItem active>Home</BreadcrumbItem>
				</Breadcrumb>
				<Row>
					<Col md={12}>
						<InputGroup>
							<Input
								onChange={this.handleSearch}
								placeholder="Please enter any search criteria here..."
							/>
						</InputGroup>
					</Col>
				</Row>
				<div className="spacer-1" />
				<Row>
					<Col md={12}>
						<Pagination
							initialPage={currentPage}
							previousLabel='prev'
							nextLabel='next'
							breakLabel='...'
							pageCount={numberOfProducts / pageSize}
							onChange={this.handlePageChange}
							containerClassName="pagination"
							pageLinkClassName="page-link"
							previousLinkClassName="page-link"
							nextLinkClassName="page-link"
							breakClassName="page-link"
							activeClassName="page-item active"
							disabledClassName="page-item disabled"
							onPageChange={this.handlePageChange}
						/>
					</Col>
				</Row>
				<div className="spacer-1" />
				{isLoading ? <ReactLoading type="bars" color="#fff" height={200} width={400} className="container-fluid" /> : ''}
				<Row style={{ display: isLoading ? 'none' : 'flex' }}>
					{products.map(prod => {
						return (
							<Col sm={6} key={prod.CardShopId + prod.ProductId}>
								<a href={`/cards/${prod.MoonpigProductNo}`}>
									<Card className="card-catalog-item">
										<Image
											src={prod.ProductImage.Link.Href}
											noImageSrc="https://via.placeholder.com/240"
											height={240}
											width={240}
											className="card-image"
										/>
									</Card>
								</a>
							</Col>
						)
					})}
				</Row>
			</div>

		);
	}
}