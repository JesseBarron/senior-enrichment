import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar >
			<Navbar.Header>
				<Navbar.Brand>
					<Link to='/'>LOGO</Link>
				</Navbar.Brand>
			</Navbar.Header>
			<Nav pullRight>
				<Link className='navbarLink' activeStyle={{ color: 'black' }} to='/campuses'>Campuses</Link>
				<Link className='navbarLink' activeStyle={{ color: 'black' }} to='/students'>Students</Link>
			</Nav>
		</Navbar>
	);
};

export default Navigation;