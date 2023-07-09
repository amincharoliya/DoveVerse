import React from 'react';
import { NavItems } from './NavItems';
import NavItem from './NavItem';

export default function Navigation() {
	return (
		<nav role="Main Navigation" className="mb-5">
			<ul>
				{NavItems.map((Item, index) => (
					<li key={index}>
						<NavItem {...Item} />
					</li>
				))}
			</ul>
		</nav>
	);
}
