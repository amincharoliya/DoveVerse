import React from 'react';
import UserBlock from './UserBlock';
import Logo from './Logo';

export default function SidebarLeft() {
	return (
		<header className="fixed flex h-screen w-[68px] flex-col overflow-y-auto xs:w-[88px] xl:w-[275px] p-5 border-r-gray-600 border-r-2">
			<Logo />
			<p>Navigation</p>
			<UserBlock />
		</header>
	);
}
