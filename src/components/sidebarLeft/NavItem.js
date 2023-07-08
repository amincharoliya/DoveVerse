import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavItem({ href, text, icon, index, disabled }) {
	const router = useRouter();
	if (disabled) {
		return (
			<div
				className={`duration-350 flex cursor-not-allowed items-center justify-center  rounded-full p-4 text-white transition ease-in-out xl:justify-start`}
			>
				{icon}
				<span className="text-md ml-4 hidden xl:block">{text}</span>
			</div>
		);
	}
	return (
		<Link
			href={href}
			className={`duration-350 flex items-center justify-center rounded-full p-4 text-white hover:bg-gray-500/30 ${
				href === router.asPath ? 'font-bold' : ''
			} transition ease-in-out xl:justify-start`}
		>
			{icon}
			<span className="text-md ml-4 hidden xl:block">{text}</span>
		</Link>
	);
}
