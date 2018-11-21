// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './app.scss';
import BrandLogo from '../public/moonpig-logo.png';
import Catalog from './catalog';
import CatalogItem from './catalogItem';

export default class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: true
		};

		this.toggleNavbar = this.toggleNavbar.bind(this);
	}

	toggleNavbar() {
		this.setState(prevState => ({ collapsed: !prevState.collapsed }));
	}

	render() {
		return (
			<BrowserRouter>
				<div id="frame">
					<Navbar className="navbar-light bg-brand" light expand="md">
						<NavbarBrand href="/" className="mr-auto">
							<img src={BrandLogo} alt="" />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} />
						<Collapse isOpen={!this.state.collapsed} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<LinkContainer to="/" activeClassName="active">
										<NavLink>Home</NavLink>
									</LinkContainer>
								</NavItem>
								<NavItem>
									<LinkContainer to="/birthday">
										<NavLink>Birthday Cards</NavLink>
									</LinkContainer>
								</NavItem>
								<NavItem>
									<LinkContainer to="/christmas">
										<NavLink>Christmas Cards</NavLink>
									</LinkContainer>
								</NavItem>
								<NavItem>
									<LinkContainer to="/food-and-drink">
										<NavLink>Food &amp; Drink</NavLink>
									</LinkContainer>
								</NavItem>
								<NavItem>
									<LinkContainer to="/gifts">
										<NavLink>Gifts</NavLink>
									</LinkContainer>
								</NavItem>
								<NavItem>
									<LinkContainer to="/flowers-and-plants">
										<NavLink>Flowers &amp; Plants</NavLink>
									</LinkContainer>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
					<Switch>
						<Route exact path="/:area?" component={Catalog} />
						<Route exact path="/cards/:productId" component={CatalogItem} />
					</Switch>
					<div id="footer">
						<div className="row">
							<div className="col-md-6 text-center">
								<h2>Moonpig.com</h2>
							</div>
							<div className="col-md-6 text-center">
								{/* eslint-disable-next-line max-len */}
								<p>10 Back Hill, London EC1R 5EN, UK, Earth, Solar System, Orion Spiral Arm, Milky Way Galaxy, Local Group, Virgo Super Cluster, The Universe</p>
							</div>
						</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
