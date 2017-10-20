import React, { Component } from 'react';
import Navigation from './Navigation';

const Root = ({ children }) => {
	// console.log('children', children);
	return (
		<div id='main'>
			<Navigation />
			{children}
		</div>
	);
};

export default Root;