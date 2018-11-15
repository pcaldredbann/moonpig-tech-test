import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './app.scss';
import BrandLogo from './../public/moonpig-logo.png';
import CardCatalog from './cardCatalog';
import Database from '../data/database.json';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		return (
			<div id="frame">
				<Navbar className="navbar-light bg-brand" light expand="md">
					<NavbarBrand href="/" className="mr-auto">
						<img src={BrandLogo} />
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">Birthday Cards</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Christmas</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Cards</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Food &amp; Drink</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Gifts</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Flowers &amp; Plants</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div id="content" className="container">
					<CardCatalog products={Database.products} />
				</div>
                <div id="footer">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <h2>Moonpig.com</h2>
                        </div>
                        <div className="col-md-6 text-center">
                            <p>10 Back Hill, London EC1R 5EN, UK, Earth, Solar System, Orion Spiral Arm, Milky Way Galaxy, Local Group, Virgo Super Cluster, The Universe</p>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}
