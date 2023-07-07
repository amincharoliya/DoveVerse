import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserBlock from './UserBlock';

export default function SidebarLeft() {
	return (
		<header className="fixed flex h-screen w-[68px] flex-col  xs:w-[88px] xl:w-[275px] p-5 border-r-gray-600 border-r-2">
			<div className="flex-initial overflow-y-auto">
				<Logo />
				<Navigation />
			</div>
			<UserBlock />
		</header>
	);
}
