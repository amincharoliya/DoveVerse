import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserBlock from './UserBlock';

export default function SidebarLeft() {
	return (
		<header className="xs:w-[88px] fixed flex h-screen w-[68px]  flex-col border-r-2 border-r-gray-600 p-5 xl:w-[275px]">
			<div className="flex-initial overflow-y-auto">
				<Logo />
				<Navigation />
			</div>
			<UserBlock />
		</header>
	);
}
