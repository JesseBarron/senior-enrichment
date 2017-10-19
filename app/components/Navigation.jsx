import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar inverse>
			<Navbar.Header>
				<Navbar.Brand>
					<NavLink to='/'>LOGO</NavLink>
				</Navbar.Brand>
			</Navbar.Header>
			<Nav pullRight>
				<NavItem href='#'><NavLink className='navbarLink' activeStyle={{ color: 'white' }} to='/campuses'>Campuses</NavLink></NavItem>
				<NavItem href='#'><NavLink className='navbarLink' activeStyle={{ color: 'white' }} to='/students'>Students</NavLink></NavItem>
			</Nav>
		</Navbar>
	);
};

export default Navigation;