import React from 'react';
import WhoFollow from './widgets/WhoFollow';

export default function SidebarRight() {
	return (
		<aside className="hidden md:flex h-screen w-[350px] flex-col border-l-2 border-l-gray-600 p-5">
			<WhoFollow />
		</aside>
	);
}
